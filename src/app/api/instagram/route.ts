import { NextRequest, NextResponse } from 'next/server';

// Instagram Basic Display API integration
// Note: This requires setting up Instagram Basic Display API and getting access tokens
export async function GET() {
  try {
    // Environment variables needed:
    // INSTAGRAM_ACCESS_TOKEN - Long-lived Instagram Basic Display API access token
    // INSTAGRAM_USER_ID - Instagram user ID for kamoathletics account
    
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.INSTAGRAM_USER_ID;

    if (!accessToken || !userId) {
      console.log('Instagram API credentials not configured, returning fallback data');
      
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

    // Fetch recent media from Instagram Basic Display API
    const response = await fetch(
      `https://graph.instagram.com/${userId}/media?fields=id,media_url,media_type,caption,permalink,timestamp&access_token=${accessToken}&limit=8`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Cache for 5 minutes to avoid hitting rate limits
        next: { revalidate: 300 }
      }
    );

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }

    const data = await response.json();

    // Filter out any posts without media_url and ensure we have proper data
    const filteredPosts = data.data?.filter((post: { media_url?: string }) => post.media_url) || [];

    return NextResponse.json({
      data: filteredPosts,
      total: filteredPosts.length
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

// Optional: Add POST method to refresh access token if needed
export async function POST(request: NextRequest) {
  try {
    const { refresh_token } = await request.json();
    
    if (!refresh_token) {
      return NextResponse.json(
        { error: 'Refresh token required' },
        { status: 400 }
      );
    }

    // Refresh the Instagram access token
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${refresh_token}`,
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
    });

  } catch (error) {
    console.error('Error refreshing Instagram token:', error);
    
    return NextResponse.json(
      { error: 'Failed to refresh access token' },
      { status: 500 }
    );
  }
}
