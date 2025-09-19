import { NextRequest, NextResponse } from 'next/server';

// Instagram Graph API integration using Facebook User Token -> Page Token -> Instagram Posts flow
// This approach uses a long-lived Facebook user token to mint fresh page tokens for each request
export async function GET() {
  try {
    // Environment variables needed (server-only, no NEXT_PUBLIC_):
    // FB_APP_ID - Facebook App ID
    // FB_APP_SECRET - Facebook App Secret  
    // FB_LONG_LIVED_USER_TOKEN - Long-lived Facebook user token (60-day)
    // FB_PAGE_ID - Facebook Page ID linked to Instagram Business account
    
    const appId = process.env.FB_APP_ID;
    const appSecret = process.env.FB_APP_SECRET;
    const userToken = process.env.FB_LONG_LIVED_USER_TOKEN;
    const pageId = process.env.FB_PAGE_ID;

    if (!appId || !appSecret || !userToken || !pageId) {
      console.log('Facebook/Instagram API credentials not configured, returning fallback data');
      console.log('Missing credentials:', { 
        appId: !!appId, 
        appSecret: !!appSecret, 
        userToken: !!userToken, 
        pageId: !!pageId 
      });
      
      // Return fallback data that matches KAMO Athletics style
      return NextResponse.json({
        data: [
          {
            id: '1',
            media_url: 'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwYjNhODYiIC8+CiAgICAgIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIwLjA1cHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjAxcHgiPktBTU88L3RleHQ+CiAgICA8L3N2Zz4=',
            media_type: 'IMAGE',
            caption: 'Morning CrossFit session at KAMO Athletics! 💪 #CrossFit #KAMOAthletics #FitnessMotivation',
            permalink: 'https://www.instagram.com/kamoathletics/',
            timestamp: new Date().toISOString()
          },
          {
            id: '2',
            media_url: 'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzMzMiIC8+CiAgICAgIDx0ZXh0IHg9IjUwJSIgeT0iNDAlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIwLjAzcHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPldFIFJJU0U8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjUwJSIgeT0iNjAlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIwLjAzcHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJZIExJRlRJTkc8L3RleHQ+CiAgICA8L3N2Zz4=',
            media_type: 'IMAGE',
            caption: 'WE RISE BY LIFTING EACH OTHER UP 🏋️‍♀️ #TeamWork #CrossFitCommunity #Motivation',
            permalink: 'https://www.instagram.com/kamoathletics/',
            timestamp: new Date().toISOString()
          },
          {
            id: '3',
            media_url: 'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM3NzciIC8+CiAgICAgIDx0ZXh0IHg9IjUwJSIgeT0iNDAlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIwLjAzcHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk9VVERPT1I8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjUwJSIgeT0iNjAlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIwLjAzcHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRSQUlOSU5HPC90ZXh0PgogICAgPC9zdmc+',
            media_type: 'IMAGE',
            caption: 'Outdoor training day! Kansas weather perfect for it 🌞 #OutdoorWorkout #KansasFitness',
            permalink: 'https://www.instagram.com/kamoathletics/',
            timestamp: new Date().toISOString()
          },
          {
            id: '4',
            media_url: 'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM2NjYiIC8+CiAgICAgIDx0ZXh0IHg9IjUwJSIgeT0iNDAlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIwLjAzcHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkZBTUlMWTwvdGV4dD4KICAgICAgPHRleHQgeD0iNTAlIiB5PSI2MCUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjAuMDNweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RklUTkVTUzwvdGV4dD4KICAgIDwvc3ZnPg==',
            media_type: 'IMAGE',
            caption: 'Family fitness time! Bringing the community together 👨‍👩‍👧‍👦 #FamilyFitness #Community',
            permalink: 'https://www.instagram.com/kamoathletics/',
            timestamp: new Date().toISOString()
          },
          {
            id: '5',
            media_url: 'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwYjNhODYiIC8+CiAgICAgIDx0ZXh0IHg9IjUwJSIgeT0iMzUlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIwLjAycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5PIERSRUFNPC90ZXh0PgogICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMC4wMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UT08gQklHPC90ZXh0PgogICAgPC9zdmc+',
            media_type: 'IMAGE',
            caption: 'NO DREAM TOO BIG when you have the right support system! 🎯 #Goals #Support #Dreams',
            permalink: 'https://www.instagram.com/kamoathletics/',
            timestamp: new Date().toISOString()
          },
          {
            id: '6',
            media_url: 'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM4ODgiIC8+CiAgICAgIDx0ZXh0IHg9IjUwJSIgeT0iNDAlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIwLjAzcHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFNUkFQPC90ZXh0PgogICAgICA8dGV4dCB4PSI1MCUiIHk9IjYwJSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMC4wM3B4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5XT1JLT1VUPC90ZXh0PgogICAgPC9zdmc+',
            media_type: 'IMAGE',
            caption: 'Luckbox AMRAP - 40 MIN of pure intensity! 🔥 #AMRAP #HighIntensity #WorkoutOfTheDay',
            permalink: 'https://www.instagram.com/kamoathletics/',
            timestamp: new Date().toISOString()
          },
          {
            id: '7',
            media_url: 'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiIC8+CiAgICAgIDx0ZXh0IHg9IjUwJSIgeT0iNDAlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIwLjAzcHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPktFRVA8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjUwJSIgeT0iNjAlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIwLjAzcHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdPSU5HPC90ZXh0PgogICAgPC9zdmc+',
            media_type: 'IMAGE',
            caption: 'KEEP GOING - Your only competition is who you were yesterday! 💯 #Motivation #Progress',
            permalink: 'https://www.instagram.com/kamoathletics/',
            timestamp: new Date().toISOString()
          },
          {
            id: '8',
            media_url: 'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwYjNhODYiIC8+CiAgICAgIDx0ZXh0IHg9IjUwJSIgeT0iMzUlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIwLjAycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJSSU5HIEEgRlJJRU5EPC90ZXh0PgogICAgICA8dGV4dCB4PSI1MCUiIHk9IjYwJSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMC4wM3B4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5XRUVLITwvdGV4dD4KICAgIDwvc3ZnPg==',
            media_type: 'IMAGE',
            caption: 'Community strong! Join us for the final BRING A FRIEND week! 🤝 #Community #Fitness #Friends',
            permalink: 'https://www.instagram.com/kamoathletics/',
            timestamp: new Date().toISOString()
          }
        ]
      });
    }

    // Step 1: Get fresh page access token using long-lived user token
    console.log('Attempting to get page token for page ID:', pageId);
    console.log('Using user token (first 20 chars):', userToken?.substring(0, 20) + '...');
    
    const pageTokenResponse = await fetch(
      `https://graph.facebook.com/v18.0/${pageId}?fields=access_token&access_token=${userToken}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!pageTokenResponse.ok) {
      const errorText = await pageTokenResponse.text();
      console.error(`Failed to get page token: ${pageTokenResponse.status}`, errorText);
      throw new Error(`Failed to get page token: ${pageTokenResponse.status} - ${errorText}`);
    }

    const pageTokenData = await pageTokenResponse.json();
    console.log('Page token response:', pageTokenData);
    const pageAccessToken = pageTokenData.access_token;

    if (!pageAccessToken) {
      throw new Error('No page access token received');
    }

    // Step 2: Get Instagram Business Account ID from the page
    const instagramAccountResponse = await fetch(
      `https://graph.facebook.com/v18.0/${pageId}?fields=instagram_business_account&access_token=${pageAccessToken}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!instagramAccountResponse.ok) {
      throw new Error(`Failed to get Instagram account: ${instagramAccountResponse.status}`);
    }

    const instagramAccountData = await instagramAccountResponse.json();
    const instagramBusinessAccountId = instagramAccountData.instagram_business_account?.id;

    if (!instagramBusinessAccountId) {
      throw new Error('No Instagram Business Account found for this page');
    }

    // Step 3: Fetch recent media from Instagram Business Account
    // Include thumbnail_url for better compatibility
    const mediaResponse = await fetch(
      `https://graph.facebook.com/v18.0/${instagramBusinessAccountId}/media?fields=id,media_url,thumbnail_url,media_type,caption,permalink,timestamp&access_token=${pageAccessToken}&limit=8`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Cache for 30 minutes to avoid rate limits
        next: { revalidate: 1800 }
      }
    );

    if (!mediaResponse.ok) {
      throw new Error(`Instagram API error: ${mediaResponse.status}`);
    }

    const mediaData = await mediaResponse.json();

    // Process posts and prefer thumbnail_url for better compatibility
    const processedPosts = mediaData.data?.map((post: any) => {
      // Use thumbnail_url for videos, media_url for images
      const imageUrl = post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url;
      
      return {
        ...post,
        media_url: imageUrl || post.media_url // fallback to media_url if no thumbnail
      };
    }).filter((post: { media_url?: string }) => post.media_url) || [];

    return NextResponse.json({
      data: processedPosts,
      total: processedPosts.length,
      cached_until: new Date(Date.now() + 1800000).toISOString() // 30 minutes from now
    });

  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    
    // Return error response but frontend will handle gracefully with fallback
    return NextResponse.json(
      { error: 'Failed to fetch Instagram posts' },
      { status: 500 }
    );
  }
}

// Optional: Add POST method to refresh long-lived user token if needed
export async function POST(request: NextRequest) {
  try {
    const { refresh_token } = await request.json();
    
    if (!refresh_token) {
      return NextResponse.json(
        { error: 'Refresh token required' },
        { status: 400 }
      );
    }

    const appId = process.env.FB_APP_ID;
    const appSecret = process.env.FB_APP_SECRET;

    if (!appId || !appSecret) {
      return NextResponse.json(
        { error: 'Facebook app credentials not configured' },
        { status: 500 }
      );
    }

    // Refresh the long-lived Facebook user token (extends from 60 days to another 60 days)
    const response = await fetch(
      `https://graph.facebook.com/v18.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=${appSecret}&fb_exchange_token=${refresh_token}`,
      {
        method: 'GET',
      }
    );

    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }

    const data = await response.json();

    return NextResponse.json({
      access_token: data.access_token,
      expires_in: data.expires_in,
      token_type: data.token_type,
    });

  } catch (error) {
    console.error('Error refreshing Facebook user token:', error);
    
    return NextResponse.json(
      { error: 'Failed to refresh access token' },
      { status: 500 }
    );
  }
}
