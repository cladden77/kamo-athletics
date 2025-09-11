# Content Updates Guide

## How to See Your Sanity Content Changes

### Automatic Updates (Development)
- **Changes now appear within 10 seconds** after publishing in Sanity
- The website automatically checks for new content every 10 seconds
- No action needed - just wait a moment after publishing

### Manual Refresh (If Needed)
If you need to force an immediate update, you can:

1. **Browser refresh**: Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
2. **API revalidation**: Visit this URL to force a content refresh:
   ```
   http://localhost:3000/api/revalidate?secret=dev-revalidate
   ```

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
