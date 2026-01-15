# WordPress Integration - Practical Examples

## Example 1: Manual Testing the API

Test if WordPress API is accessible:

```bash
# Check WordPress API availability
curl "https://matchplugagency.com/blog/wp-json/wp/v2/posts?_embed&per_page=5"
```

You should see JSON data with your posts.

## Example 2: Testing the Revalidation Endpoint

After setting your secret in `.env.local`:

```bash
# Revalidate all blog posts
curl "https://yourdomain.com/api/revalidate?secret=YOUR_SECRET&type=posts"

# Revalidate a specific post
curl "https://yourdomain.com/api/revalidate?secret=YOUR_SECRET&type=post&slug=my-awesome-article"
```

Expected response:

```json
{
  "revalidated": true,
  "message": "Blog listing revalidated",
  "timestamp": "2024-01-14T10:30:00.000Z"
}
```

## Example 3: Generating a Secure Secret

On Mac/Linux:

```bash
openssl rand -hex 32
# Output: a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

On Windows (PowerShell):

```powershell
[System.Convert]::ToHexString([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(32))
```

Then add to `.env.local`:

```env
REVALIDATION_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

## Example 4: WordPress Webhook Setup via Code

Add this to your WordPress `functions.php`:

```php
<?php
// Webhook for Next.js blog revalidation
add_action('publish_post', 'trigger_nextjs_revalidation');
add_action('post_updated', 'trigger_nextjs_revalidation');
add_action('delete_post', 'trigger_nextjs_revalidation');

function trigger_nextjs_revalidation($post_id) {
    // Skip if not published
    if (get_post_status($post_id) !== 'publish') {
        return;
    }

    $post = get_post($post_id);
    $secret = 'YOUR_SECRET_HERE'; // Match .env.local REVALIDATION_SECRET
    $site_url = 'https://yourdomain.com'; // Your Next.js site
    $slug = $post->post_name;

    // Trigger revalidation for specific post
    $url = "{$site_url}/api/revalidate?secret={$secret}&type=post&slug={$slug}";

    wp_remote_post($url, array(
        'blocking' => false, // Don't wait for response
        'timeout' => 5,
        'sslverify' => false, // For local dev only
    ));

    // Also trigger full blog revalidation
    $blog_url = "{$site_url}/api/revalidate?secret={$secret}&type=posts";
    wp_remote_post($blog_url, array(
        'blocking' => false,
        'timeout' => 5,
    ));
}
?>
```

## Example 5: Using the Blog Components

Import and use the BlogCard component:

```tsx
import { BlogCard } from "@/components/blog-card";
import { getWordPressPosts } from "@/lib/wordpress";

export default async function MyComponent() {
  const posts = await getWordPressPosts();

  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
```

## Example 6: Getting a Single Post

```tsx
import { getWordPressPosts, stripHtml } from "@/lib/wordpress";

async function getSinglePost(slug: string) {
  const posts = await getWordPressPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return null;
  }

  return {
    id: post.id,
    title: stripHtml(post.title.rendered),
    content: post.content.rendered,
    excerpt: stripHtml(post.excerpt.rendered),
    date: post.date,
    slug: post.slug,
    featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
  };
}
```

## Example 7: Environment Variables for Different Environments

### Development (.env.local)

```env
NEXT_PUBLIC_WORDPRESS_URL=https://matchplugagency.com/blog
REVALIDATION_SECRET=dev-secret-key-12345
```

### Production (Set in Vercel/Hosting)

```env
NEXT_PUBLIC_WORDPRESS_URL=https://matchplugagency.com/blog
REVALIDATION_SECRET=prod-secret-key-secure-long-string
```

## Example 8: Checking Blog Performance

View ISR revalidation metrics in Vercel:

1. Go to Vercel dashboard
2. Select your project
3. Go to "Analytics" → "Web Vitals"
4. Check ISR cache hit rates

Posts should cache for 1 hour, then revalidate.

## Example 9: Troubleshooting

### Posts not showing?

```bash
# Check WordPress API directly
curl "https://matchplugagency.com/blog/wp-json/wp/v2/posts?_embed" | head -20
```

### Webhook not working?

```bash
# Test with verbose output
curl -v "https://yourdomain.com/api/revalidate?secret=test&type=posts"
# Should return 200 with JSON response
```

### Check server logs

```bash
# On Vercel, view logs:
vercel logs [project-name]

# Local development:
npm run dev
# Watch console for errors
```

## Example 10: Customizing ISR Time

The current setup revalidates every 1 hour. To change it:

**In `lib/wordpress.ts`:**

```typescript
// Change this:
const REVALIDATION_TIME = 3600; // 1 hour

// To this (examples):
const REVALIDATION_TIME = 1800; // 30 minutes
const REVALIDATION_TIME = 7200; // 2 hours
const REVALIDATION_TIME = 86400; // 1 day
```

Then redeploy to apply changes.

---

**Need help?** Check `WORDPRESS_INTEGRATION.md` for comprehensive documentation.
