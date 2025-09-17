# Sanity Webhook Setup for Instant Content Updates

## 🎯 **For Local Development**

### Step 1: Start Your Local Server
```bash
npm run dev
```

### Step 2: Test Manual Revalidation
**Click this link** or visit this URL in your browser to test the revalidation endpoint:
```
http://localhost:3000/api/revalidate?secret=dev-revalidate
```

You should see a response like:
```json
{
  "revalidated": true,
  "message": "All content revalidated",
  "tags": ["hero", "about", "teamMember", "schedule", "contact", "footer", "siteSettings"],
  "now": 1705123456789
}
```

✅ **Fixed**: The endpoint now supports both GET and POST requests, so you can test it directly in your browser!

### Step 3: Enable Webhooks (Optional for Local Development)
For even faster local updates, you can use ngrok or similar:

1. **Install ngrok**: `npm install -g ngrok`
2. **Expose local server**: `ngrok http 3000`
3. **Copy the HTTPS URL** (e.g., `https://abc123.ngrok.io`)
4. **Go to Sanity Studio** → Settings → API → Webhooks
5. **Add webhook**:
   - **Name**: "Local Development"
   - **URL**: `https://abc123.ngrok.io/api/revalidate?secret=dev-revalidate`
   - **Trigger on**: Document changes
   - **HTTP method**: POST

---

## 🚀 **For Production (Vercel)**

### Step 1: Set Environment Variables in Vercel
1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add these variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=ua5ga1nx
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=[your-sanity-api-token]
   REVALIDATION_SECRET=[create-a-secure-random-string]
   ```

### Step 2: Create a Secure Revalidation Secret
Generate a random secret key (keep this safe!):
```bash
# Example secret (create your own!)
REVALIDATION_SECRET=your-super-secure-random-key-here-123456
```

### Step 3: Set Up Production Webhook
1. **Go to Sanity Studio** → Settings → API → Webhooks
2. **Add webhook**:
   - **Name**: "Vercel Production"
   - **URL**: `https://your-domain.vercel.app/api/revalidate?secret=YOUR_REVALIDATION_SECRET`
   - **Trigger on**: Document changes
   - **HTTP method**: POST
   - **Filter** (optional): Leave blank to revalidate on all changes

### Step 4: Test Production Webhook
1. **Deploy your site** to Vercel
2. **Edit content** in Sanity Studio
3. **Click "Publish"**
4. **Check your live site** - changes should appear within 1-2 seconds!

---

## 🔧 **How the Webhook Works**

### Smart Revalidation
The webhook endpoint (`/api/revalidate`) automatically:

1. **Receives webhook** from Sanity when content is published
2. **Identifies content type** from the webhook payload (`_type` field)
3. **Revalidates specific cache tags** (only the content that changed)
4. **Updates the homepage** to reflect changes

### Content Type Mapping
Each Sanity document type maps to a specific cache tag:
- `hero` documents → `hero` tag
- `about` documents → `about` tag  
- `teamMember` documents → `teamMember` tag
- `schedule` documents → `schedule` tag
- `contact` documents → `contact` tag
- `footer` documents → `footer` tag
- `siteSettings` documents → `siteSettings` tag

---

## 🐛 **Troubleshooting**

### Content Not Updating Instantly?

1. **Check webhook logs** in Sanity Studio:
   - Go to Settings → API → Webhooks
   - Click on your webhook to see delivery logs

2. **Test manual revalidation**:
   ```
   https://your-domain.com/api/revalidate?secret=YOUR_SECRET
   ```

3. **Verify environment variables** are set correctly in Vercel

4. **Check browser cache** - try hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

### Common Issues

| Issue | Solution |
|-------|----------|
| **401 Unauthorized** | Check `REVALIDATION_SECRET` matches in webhook URL and env vars |
| **Webhook not triggering** | Verify webhook URL is correct and accessible |
| **Changes don't appear** | Make sure you clicked "Publish" (not just saved as draft) |
| **Old content showing** | Check if content was actually published in Sanity |

### Debug Endpoints

Check what content Sanity is returning:
- **All content**: `https://your-domain.com/api/debug-sanity?type=all`
- **Specific type**: `https://your-domain.com/api/debug-sanity?type=hero`

---

## ⚡ **Performance Notes**

### Development vs Production

| Setting | Development | Production |
|---------|-------------|------------|
| **Cache Time** | 10 seconds | 1 hour |
| **CDN** | Disabled | Disabled (for revalidation) |
| **Updates** | Instant via webhook | Instant via webhook |
| **Fallback** | Manual refresh | ISR (60s backup) |

### Benefits
- ✅ **Instant updates** when content is published
- ✅ **Efficient caching** - only changed content is revalidated
- ✅ **Reliable fallback** - ISR ensures content updates even without webhooks
- ✅ **Smart targeting** - revalidates only the specific content type that changed
