# WordPress Integration Guide

This Next.js site is now fully integrated with your WordPress blog at **https://matchplugagency.com/blog**.

## How It Works

### Automatic Updates (ISR - Incremental Static Regeneration)

The blog pages use **Next.js ISR** to automatically revalidate content every **1 hour** (3600 seconds):

- **Blog listing page**: `/blog` - Updates automatically every hour
- **Individual blog posts**: `/blog/[slug]` - Updates automatically every hour

This means new articles and updates are reflected on your site within 1 hour without rebuilding the entire site.

### Real-Time Updates (Optional Webhook)

For immediate updates when you publish/update content in WordPress, configure a webhook:

#### Setting Up a WordPress Webhook (Using a Plugin)

1. **Install a Webhook Plugin** (recommended: "Post Notification" or similar)
2. **Configure the webhook URL** to trigger when posts are published:

   ```
   https://yourdomain.com/api/revalidate?secret=YOUR_SECRET&type=posts
   ```

3. **For individual post updates**:
   ```
   https://yourdomain.com/api/revalidate?secret=YOUR_SECRET&type=post&slug={post-slug}
   ```

#### Setting the Revalidation Secret

1. Edit `.env.local` in the project root:

   ```env
   REVALIDATION_SECRET=your-secure-secret-key-here
   ```

2. Generate a secure secret (optional, but recommended):

   ```bash
   openssl rand -hex 32
   # Output example: a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
   ```

3. Update the webhook URL with your actual secret:
   ```
   https://yourdomain.com/api/revalidate?secret=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6&type=posts
   ```

## Environment Variables

Create a `.env.local` file in the project root (copy from `.env.local.example`):

```env
# WordPress Configuration
NEXT_PUBLIC_WORDPRESS_URL=https://matchplugagency.com/blog

# Revalidation Secret (for webhook triggers)
REVALIDATION_SECRET=your-secure-secret-key-here
```

## Files Modified/Created

### New Files

- **`lib/wordpress.ts`** - Core WordPress API utilities

  - `getWordPressPosts()` - Fetches all posts
  - `getWordPressPostBySlug()` - Fetches a single post
  - `stripHtml()` - Removes HTML tags
  - `getReadingTime()` - Calculates reading time
  - `truncateText()` - Truncates text to a limit

- **`app/api/revalidate/route.ts`** - API endpoint for webhook revalidation

  - Validates revalidation secret
  - Triggers cache clearing for blog pages

- **`.env.local.example`** - Environment variable template

### Modified Files

- **`app/blog/page.tsx`** - Main blog listing page

  - Now imports utilities from `lib/wordpress.ts`
  - Uses ISR with 1-hour revalidation

- **`app/blog/[slug]/page.tsx`** - Individual blog post pages

  - Now imports utilities from `lib/wordpress.ts`
  - Uses ISR with 1-hour revalidation
  - Supports dynamic route generation

- **`components/blog-card.tsx`** - Blog card component
  - Fixed type issues
  - Now uses WordPress utilities
  - Calculates reading time automatically

## WordPress API Details

The integration connects to your WordPress REST API:

```
https://matchplugagency.com/blog/wp-json/wp/v2/posts
```

**Parameters used:**

- `_embed` - Includes embedded media (featured images)
- `per_page=100` - Fetches up to 100 posts per request

**Data extracted:**

- Post title and content
- Featured images
- Publish date
- Post slug

## Troubleshooting

### Posts Not Showing

1. Verify WordPress is accessible: Visit `https://matchplugagency.com/blog/wp-json/wp/v2/posts?_embed` in your browser
2. Check that posts are published (not draft)
3. Ensure featured images are set for posts

### Webhook Not Working

1. Verify the `.env.local` file has the correct `REVALIDATION_SECRET`
2. Check the webhook URL in your WordPress plugin settings
3. Test manually: `https://yourdomain.com/api/revalidate?secret=YOUR_SECRET&type=posts`

### Performance

- Blog pages are statically generated and cached
- ISR ensures updates within 1 hour
- Webhook revalidation provides real-time updates if configured

## Testing

To manually test the revalidation endpoint:

```bash
# Revalidate all blog posts
curl "https://yourdomain.com/api/revalidate?secret=YOUR_SECRET&type=posts"

# Revalidate a specific post
curl "https://yourdomain.com/api/revalidate?secret=YOUR_SECRET&type=post&slug=my-post-slug"
```

Expected response:

```json
{
  "revalidated": true,
  "message": "Blog listing revalidated",
  "timestamp": "2024-01-14T10:30:00.000Z"
}
```
