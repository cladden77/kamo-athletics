# Instagram Graph API Setup Guide for KAMO Athletics

This guide will walk you through setting up Instagram Graph API to pull live posts into your website.

## Prerequisites ✅

1. **Instagram Business Account** - @kamoathletics must be converted to a Business or Creator account
2. **Facebook Page** - Connected to your Instagram Business account
3. **Meta Developer Account** - Free account at developers.facebook.com

---

## Step 1: Convert Instagram to Business Account

1. **Open Instagram app** on your phone
2. **Go to Profile** → **Settings** → **Account type and tools**
3. **Switch to Professional Account** → Choose **Business**
4. **Connect to Facebook Page** (create one if needed)

> ⚠️ **Important**: Personal Instagram accounts cannot use Graph API

---

## Step 2: Create Meta Developer App

### 2.1 Create Developer Account
1. Go to [developers.facebook.com](https://developers.facebook.com)
2. **Log in** with your Facebook account
3. **Create Developer Account** (if first time)
4. **Verify your account** (phone number required)

### 2.2 Create New App
1. Click **"Create App"**
2. Select **"Business"** as app type
3. Fill in app details:
   - **App Name**: "KAMO Athletics Website"
   - **App Contact Email**: your-email@domain.com
   - **Business Account**: Select your business account
4. Click **"Create App"**

### 2.3 Add Instagram Graph API
1. In your new app dashboard, click **"Add Product"**
2. Find **"Instagram Graph API"** and click **"Set Up"**
3. The Instagram Graph API will be added to your app

---

## Step 3: Configure App Settings

### 3.1 Basic Settings
1. Go to **Settings** → **Basic**
2. Note down your **App ID** and **App Secret** (you'll need these)
3. Add **App Domains**: `your-domain.com` (replace with your actual domain)
4. Add **Privacy Policy URL** and **Terms of Service URL** (if you have them)

### 3.2 Instagram Graph API Settings
1. Go to **Instagram Graph API** → **Settings**
2. Add **Valid OAuth Redirect URIs**: 
   - `https://your-domain.com/` (your website)
   - `https://developers.facebook.com/tools/explorer/` (for testing)

---

## Step 4: Get Instagram Business Account ID

### 4.1 Using Graph API Explorer
1. Go to [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Select your app from dropdown
3. Select **"User Token"** → **"Get User Access Token"**
4. Check these permissions:
   - `instagram_graph_user_profile`
   - `instagram_graph_user_media`
   - `pages_show_list`
   - `pages_read_engagement`
5. Click **"Generate Access Token"** and authorize

### 4.2 Find Your Instagram Business Account ID
1. In Graph API Explorer, enter this query:
   ```
   me/accounts
   ```
2. Click **"Submit"**
3. Look for your Facebook Page in the response
4. Copy the page **"id"**
5. Now query for Instagram account:
   ```
   {PAGE_ID}?fields=instagram_business_account
   ```
6. Replace `{PAGE_ID}` with your page ID and submit
7. Copy the **Instagram Business Account ID** from the response

---

## Step 5: Generate Long-lived Access Token

### 5.1 Get Short-lived Token
1. In Graph API Explorer (with your app selected)
2. Get a **User Access Token** with these permissions:
   - `instagram_graph_user_profile`
   - `instagram_graph_user_media`
   - `pages_show_list`
   - `pages_read_engagement`
3. Copy the generated token

### 5.2 Exchange for Long-lived Token
Make this API call (replace the values):

```bash
curl -X GET "https://graph.facebook.com/v18.0/oauth/access_token?grant_type=fb_exchange_token&client_id={APP_ID}&client_secret={APP_SECRET}&fb_exchange_token={SHORT_LIVED_TOKEN}"
```

**Replace:**
- `{APP_ID}` - Your Meta App ID
- `{APP_SECRET}` - Your Meta App Secret  
- `{SHORT_LIVED_TOKEN}` - The token from step 5.1

The response will contain your **long-lived access token** (valid for 60 days).

---

## Step 6: Test Your Setup

### 6.1 Test Instagram API Call
Using your long-lived token and Instagram Business Account ID:

```bash
curl -X GET "https://graph.facebook.com/v18.0/{INSTAGRAM_BUSINESS_ACCOUNT_ID}/media?fields=id,media_url,media_type,caption,permalink,timestamp&access_token={LONG_LIVED_TOKEN}&limit=5"
```

You should see your Instagram posts in the response!

---

## Step 7: Configure Your Website

### 7.1 Create .env.local File
In your project root, create `.env.local` with:

```bash
# Sanity CMS Configuration (existing)
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token-here

# Instagram Graph API Configuration (new)
INSTAGRAM_ACCESS_TOKEN=your-long-lived-access-token
INSTAGRAM_BUSINESS_ACCOUNT_ID=your-instagram-business-account-id
META_APP_ID=your-meta-app-id
META_APP_SECRET=your-meta-app-secret
```

### 7.2 Deploy and Test
1. **Restart your development server**: `npm run dev`
2. **Visit your website** and check the Instagram section
3. **Deploy to production** with the environment variables

---

## Step 8: Set Up Token Refresh (Important!)

Instagram Graph API tokens expire every 60 days. Set up automatic refresh:

### Option A: Manual Refresh
1. Set a calendar reminder for every 50 days
2. Generate a new long-lived token following Step 5
3. Update your environment variables

### Option B: Automatic Refresh (Advanced)
Your website already includes a token refresh endpoint at `/api/instagram` (POST method). You can:
1. Set up a cron job or scheduled function
2. Call the refresh endpoint monthly
3. Update your environment variables automatically

---

## Troubleshooting 🔧

### Common Issues:

**"Instagram account is not a business account"**
- Convert to Business/Creator account in Instagram app
- Connect to a Facebook Page

**"Invalid OAuth access token"**
- Check token hasn't expired (60 days)
- Regenerate token following Step 5

**"Instagram Business Account not found"**
- Ensure Instagram is connected to Facebook Page
- Use correct Instagram Business Account ID

**"Permissions error"**
- Check all required permissions are granted
- Re-authorize with correct permissions

**"Rate limiting"**
- Instagram Graph API has rate limits
- Your website caches responses for 5 minutes
- Don't exceed 200 calls per hour

---

## Support Resources 📚

- [Instagram Graph API Documentation](https://developers.facebook.com/docs/instagram-api/)
- [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
- [Meta for Developers Community](https://developers.facebook.com/community/)

---

## Quick Reference 📝

**Your Values** (fill these in as you go):
- **App ID**: `_________________`
- **App Secret**: `_________________`
- **Instagram Business Account ID**: `_________________`
- **Long-lived Access Token**: `_________________`

---

*Once configured, your website will automatically pull the latest 8 Instagram posts from @kamoathletics and display them in the beautiful grid layout!*
