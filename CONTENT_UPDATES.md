# Content Updates Guide

## 🚀 **IMPROVED: Instant Content Updates with Webhooks**

Your site is now configured for **instant content updates** when you publish changes in Sanity Studio!

### How It Works
- **Instant Updates**: Changes appear immediately after clicking "Publish" in Sanity
- **Smart Caching**: Uses Next.js revalidation to update only the content that changed
- **Automatic Webhooks**: Sanity automatically tells your site when content is updated

### Quick Test
1. Go to `/studio` and edit any content
2. Click **"Publish"** (not just save)
3. Check your main site - changes should appear within **1-2 seconds**!

### Manual Refresh Options
If you need to force an update manually:

1. **Force all content refresh** (click this link or visit in browser):
   ```
   http://localhost:3000/api/revalidate?secret=dev-revalidate
   ```

2. **Force specific content type**:
   ```
   http://localhost:3000/api/revalidate?secret=dev-revalidate&tag=hero
   ```
   (Replace `hero` with: `about`, `teamMember`, `schedule`, `contact`, `footer`, or `siteSettings`)

> 💡 **Pro Tip**: You can now visit these URLs directly in your browser to force content updates!

### Publishing in Sanity Studio
1. Go to `/studio` in your browser
2. Edit your content (Hero, About, Team Members, etc.)
3. **Click "Publish"** (important - just saving as draft won't show on the website)
4. Wait 10 seconds and refresh your main website

### Troubleshooting

#### Quick Fixes (Try these first):
1. **Force refresh**: Visit `http://localhost:3000/api/revalidate?secret=dev-revalidate`
2. **Hard browser refresh**: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
3. **Check if published**: Make sure you clicked "Publish" in Sanity (not just saved as draft)

#### Debug Your Content:
Check what Sanity is actually returning:
- **All content**: `http://localhost:3000/api/debug-sanity?type=all`
- **Hero only**: `http://localhost:3000/api/debug-sanity?type=hero`
- **About only**: `http://localhost:3000/api/debug-sanity?type=about`

#### Common Issues:
- **Content shows as `null`**: Document not created or not published
- **Old content still showing**: Try the force refresh URL above
- **Changes not appearing**: Check if the document exists in the debug output

#### Still Not Working?
1. **Restart the development server**: Stop and run `npm run dev` again
2. **Check the terminal** for any error messages
3. **Verify in Sanity Studio**: Make sure the document exists and is published

### Production Notes
- In production, content updates every 60 seconds instead of 10
- You can set up webhooks for instant updates in production if needed

## Content Structure
Your content is organized in Sanity as:
- **Hero Section** - Main banner and call-to-action
- **About Section** - Company description and team info
- **Team Members** - Individual team member profiles
- **Class Schedule** - Workout times and descriptions
- **Contact Section** - Contact information and map
- **Footer** - Company info and links
- **Site Settings** - Logo and navigation
