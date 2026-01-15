import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

/**
 * API Route for on-demand revalidation
 * 
 * Usage:
 * - POST /api/revalidate?secret=YOUR_SECRET&type=posts
 * - POST /api/revalidate?secret=YOUR_SECRET&type=post&slug=post-slug
 * 
 * You can configure a WordPress webhook to call this endpoint
 * whenever a post is published, updated, or deleted.
 * 
 * WordPress Webhook Setup:
 * 1. Install a webhook plugin like "Post Notification" or use native capabilities
 * 2. Set up POST to: https://yourdomain.com/api/revalidate?secret=YOUR_SECRET&type=posts
 * 3. Trigger on: post.published, post.updated
 */

const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET || "your-secret-key-here"

export async function POST(request: NextRequest) {
  try {
    // Verify the secret token
    const secret = request.nextUrl.searchParams.get("secret")
    const type = request.nextUrl.searchParams.get("type")
    const slug = request.nextUrl.searchParams.get("slug")

    if (secret !== REVALIDATION_SECRET) {
      return NextResponse.json(
        { error: "Invalid revalidation secret" },
        { status: 401 }
      )
    }

    if (!type) {
      return NextResponse.json(
        { error: "Missing 'type' parameter. Use 'posts' or 'post'" },
        { status: 400 }
      )
    }

    // Revalidate the blog listing page
    if (type === "posts") {
      revalidatePath("/blog")
      return NextResponse.json({
        revalidated: true,
        message: "Blog listing revalidated",
        timestamp: new Date().toISOString(),
      })
    }

    // Revalidate a specific blog post
    if (type === "post" && slug) {
      revalidatePath(`/blog/${slug}`)
      revalidatePath("/blog") // Also revalidate the main blog page
      return NextResponse.json({
        revalidated: true,
        message: `Post '${slug}' revalidated`,
        timestamp: new Date().toISOString(),
      })
    }

    return NextResponse.json(
      { error: "Invalid type parameter or missing slug for post revalidation" },
      { status: 400 }
    )
  } catch (error) {
    console.error("[Revalidation API] Error:", error)
    return NextResponse.json(
      { error: "Revalidation failed", details: String(error) },
      { status: 500 }
    )
  }
}
