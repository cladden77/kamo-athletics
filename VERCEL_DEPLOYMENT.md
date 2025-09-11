# Vercel Deployment Guide for Sanity CMS

## 🚨 **CRITICAL: You MUST set up environment variables in Vercel**

### **Step 1: Set Environment Variables in Vercel**

1. **Go to your Vercel project dashboard**
2. **Click on "Settings" tab**
3. **Click on "Environment Variables"**
4. **Add these variables:**

```
NEXT_PUBLIC_SANITY_PROJECT_ID = ua5ga1nx
NEXT_PUBLIC_SANITY_DATASET = production
SANITY_API_TOKEN = [Get from Sanity.io dashboard]
REVALIDATION_SECRET = [Create a random secret key]
```

### **Step 2: Get Your Sanity API Token**

1. **Go to**: https://sanity.io/manage/personal/tokens
2. **Click "Add API token"**
3. **Name**: "Vercel Production"
4. **Permissions**: "Editor" (or "Viewer" if you only need read access)
5. **Copy the token** and add it to Vercel as `SANITY_API_TOKEN`

### **Step 3: Set Up Webhooks (Optional but Recommended)**

For instant content updates in production:

1. **In Sanity Studio** → Settings → API → Webhooks
2. **Add webhook**:
   - **Name**: "Vercel Revalidation"
   - **URL**: `https://your-domain.vercel.app/api/revalidate?secret=YOUR_REVALIDATION_SECRET`
   - **Trigger on**: Document changes
   - **HTTP method**: POST

### **Step 4: Redeploy After Setting Variables**

1. **In Vercel**: Go to "Deployments" tab
2. **Click the "..." menu** on the latest deployment
3. **Click "Redeploy"** to apply the new environment variables

### **Step 5: Test Your Production Site**

1. **Visit your production URL**
2. **Check `/studio` route** works
3. **Make a test edit** in Sanity Studio
4. **Publish the content**
5. **Verify it appears** on your site (may take up to 60 seconds)

## **Troubleshooting Production Issues**

### **Content Not Updating?**
- ✅ Check environment variables are set in Vercel
- ✅ Verify SANITY_API_TOKEN has correct permissions
- ✅ Ensure content is **published** (not just saved as draft)
- ✅ Try manual revalidation: `https://your-domain.vercel.app/api/revalidate?secret=YOUR_SECRET`

### **Studio Not Loading?**
- ✅ Check NEXT_PUBLIC_SANITY_PROJECT_ID is set correctly
- ✅ Verify the domain is added to Sanity CORS settings
- ✅ Check browser console for errors

### **Images Not Loading?**
- ✅ Verify SANITY_API_TOKEN has read permissions
- ✅ Check image URLs in browser developer tools

## **Production vs Development Differences**

| Setting | Development | Production |
|---------|-------------|------------|
| **Caching** | Disabled (revalidate: 0) | 60 seconds |
| **CDN** | Disabled | Enabled |
| **Content** | Drafts + Published | Published only |
| **Updates** | Instant | Up to 60 seconds |

## **Security Notes**

- ✅ **NEVER** commit `.env.local` with real tokens
- ✅ **Use minimal permissions** for API tokens
- ✅ **Rotate tokens** periodically
- ✅ **Use HTTPS** for webhooks
