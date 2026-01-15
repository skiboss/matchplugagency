# WordPress Integration - Quick Setup

## ✅ Completed Setup

Your Next.js site now has full WordPress integration with automatic updates!

## 📋 Setup Checklist

### 1. Environment Variables

- [ ] Copy `.env.local.example` to `.env.local`:
  ```bash
  cp .env.local.example .env.local
  ```
- [ ] Update `REVALIDATION_SECRET` with a secure key (or generate one):
  ```bash
  openssl rand -hex 32
  ```

### 2. Deploy to Production

- [ ] Build and test locally:
  ```bash
  npm run build
  npm run start
  ```
- [ ] Push to your hosting (Vercel, etc.) with the `.env.local` variables set

### 3. Optional: Setup WordPress Webhook (For Real-Time Updates)

#### Using a WordPress Plugin

- [ ] Install "Post Notification" or similar webhook plugin
- [ ] Configure webhook trigger on: `post.published`, `post.updated`
- [ ] Set webhook URL:
  ```
  https://yourdomain.com/api/revalidate?secret=YOUR_SECRET&type=posts
  ```

#### Or Using WordPress Code (Add to Functions.php)

```php
// Trigger webhook on post publish/update
add_action('publish_post', function($post_id) {
    $secret = 'YOUR_SECRET_HERE'; // Use same secret from .env.local
    $slug = get_post_field('post_name', $post_id);
    $url = "https://yourdomain.com/api/revalidate?secret={$secret}&type=post&slug={$slug}";

    wp_remote_post($url, array(
        'blocking' => false,
        'sslverify' => apply_filters('https_local_ssl_verify', false)
    ));
});
```

## 🔄 How Updates Work

### Without Webhook (Default)

- Blog updates automatically every **1 hour**
- No action needed from you
- Works out of the box

### With Webhook (Optional, For Real-Time)

- Changes appear within seconds of publishing
- Requires WordPress webhook configuration
- More responsive for your readers

## 📚 Components & Files

**Main Blog Pages:**

- `app/blog/page.tsx` - Blog listing
- `app/blog/[slug]/page.tsx` - Individual posts

**Components:**

- `components/blog-card.tsx` - Blog post card

**Utilities:**

- `lib/wordpress.ts` - WordPress API functions

**API:**

- `app/api/revalidate/route.ts` - Revalidation endpoint

## 🧪 Test It

1. Check your blog loads: `https://yourdomain.com/blog`
2. Click on a post to view full article
3. Edit a post in WordPress
4. Wait up to 1 hour or trigger webhook to see updates

## ❓ Questions?

See `WORDPRESS_INTEGRATION.md` for detailed documentation.
