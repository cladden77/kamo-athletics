# Get New Facebook Token - URGENT

Your token expired. Follow these steps to get a new one:

## Step 1: Go to Graph API Explorer
https://developers.facebook.com/tools/explorer/

## Step 2: Generate New Token
1. **Select your app**: "KAMO Athletics Website" (App ID: 1509288893438026)
2. **Click "Generate Access Token"**
3. **Select permissions**:
   - `pages_show_list`
   - `pages_read_engagement` 
   - `instagram_graph_user_profile`
   - `instagram_graph_user_media`
4. **Click "Generate Access Token"** and authorize
5. **Copy the short-lived token** it gives you

## Step 3: Convert to Long-lived Token
Run this command (replace YOUR_SHORT_TOKEN with the token from step 2):

```bash
curl -X GET "https://graph.facebook.com/v18.0/oauth/access_token?grant_type=fb_exchange_token&client_id=1509288893438026&client_secret=842d5286789506b90764745f84a49c69&fb_exchange_token=YOUR_SHORT_TOKEN"
```

## Step 4: Update .env.local
Replace the `FB_LONG_LIVED_USER_TOKEN` in your `.env.local` with the new token from step 3.

## Step 5: Restart Server
```bash
npm run dev
```

The new token will be valid for 60 days.
