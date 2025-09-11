'use client';

import { useState, useEffect, useMemo } from 'react';

interface InstagramPost {
  id: string;
  media_url: string;
  media_type: string;
  caption?: string;
  permalink: string;
  timestamp: string;
}

export default function InstagramGallery() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [, setError] = useState<string | null>(null);

  // Fallback posts that match the actual KAMO Athletics content style
  const fallbackPosts = useMemo(() => [
    {
      id: '1',
      media_url: 'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZDEpIiAvPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQxIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzMzMiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzU1NSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgIDwvc3ZnPg==',
      caption: 'Morning CrossFit session at KAMO Athletics! 💪',
      permalink: 'https://www.instagram.com/kamoathletics/',
      media_type: 'IMAGE',
      timestamp: new Date().toISOString()
    },
    {
      id: '2',
      media_url: 'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZDIpIiAvPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQyIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwYjNhODYiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA4MmY2YiIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgIDwvc3ZnPg==',
      caption: 'WE RISE BY LIFTING EACH OTHER UP 🏋️‍♀️',
      permalink: 'https://www.instagram.com/kamoathletics/',
      media_type: 'IMAGE',
      timestamp: new Date().toISOString()
    },
    {
      id: '3',
      media_url: 'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZDMpIiAvPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQzIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM3NzciLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzk5OSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgIDwvc3ZnPg==',
      caption: 'Outdoor training day! Kansas weather perfect for it 🌞',
      permalink: 'https://www.instagram.com/kamoathletics/',
      media_type: 'IMAGE',
      timestamp: new Date().toISOString()
    },
    {
      id: '4',
      media_url: 'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZDQpIiAvPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQ0Ij4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2NjYiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzQ0NCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgIDwvc3ZnPg==',
      caption: 'Family fitness time! Bringing the community together 👨‍👩‍👧‍👦',
      permalink: 'https://www.instagram.com/kamoathletics/',
      media_type: 'IMAGE',
      timestamp: new Date().toISOString()
    },
    {
      id: '5',
      media_url: 'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZDUpIiAvPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQ1Ij4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwYjNhODYiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgIDwvc3ZnPg==',
      caption: 'NO DREAM TOO BIG when you have the right support system! 🎯',
      permalink: 'https://www.instagram.com/kamoathletics/',
      media_type: 'IMAGE',
      timestamp: new Date().toISOString()
    },
    {
      id: '6',
      media_url: 'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZDYpIiAvPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQ2Ij4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM4ODgiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzU1NSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgIDwvc3ZnPg==',
      caption: 'Luckbox AMRAP - 40 MIN of pure intensity! 🔥',
      permalink: 'https://www.instagram.com/kamoathletics/',
      media_type: 'IMAGE',
      timestamp: new Date().toISOString()
    },
    {
      id: '7',
      media_url: 'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZDcpIiAvPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQ3Ij4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDAiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzMzMyIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgIDwvc3ZnPg==',
      caption: 'KEEP GOING - Your only competition is who you were yesterday! 💯',
      permalink: 'https://www.instagram.com/kamoathletics/',
      media_type: 'IMAGE',
      timestamp: new Date().toISOString()
    },
    {
      id: '8',
      media_url: 'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZDgpIiAvPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQ4Ij4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwYjNhODYiLz4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA2MjY1OCIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgIDwvc3ZnPg==',
      caption: 'Community strong! Join us for the final BRING A FRIEND week! 🤝',
      permalink: 'https://www.instagram.com/kamoathletics/',
      media_type: 'IMAGE',
      timestamp: new Date().toISOString()
    }
  ], []);

  useEffect(() => {
    // Try to fetch Instagram posts from API route
    const fetchInstagramPosts = async () => {
      try {
        // This would be your API route to fetch Instagram posts
        // For now, we'll use fallback posts since Instagram Basic Display API requires setup
        const response = await fetch('/api/instagram');
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }
        
        const data = await response.json();
        setPosts(data.data || fallbackPosts);
      } catch {
        console.log('Using fallback Instagram posts');
        setPosts(fallbackPosts);
        setError(null); // Don't show error for fallback
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [fallbackPosts]);

  const displayPosts = posts.length > 0 ? posts.slice(0, 8) : fallbackPosts;
  const mobileDisplayPosts = displayPosts.slice(0, 3); // First 3 posts for mobile

  if (loading) {
    return (
      <div className="bg-[#f2f2f2] pb-[75px]">
        {/* Mobile Loading - 3 stacked images */}
        <div className="block md:hidden mb-16 space-y-1">
          <div className="aspect-square bg-gray-300 animate-pulse" />
          <div className="aspect-square bg-gray-300 animate-pulse" />
          <div className="aspect-square bg-gray-300 animate-pulse" />
        </div>
        
        {/* Desktop Loading - 4x2 grid */}
        <div className="hidden md:grid grid-cols-4 gap-1 mb-16">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="aspect-square bg-gray-300 animate-pulse" />
          ))}
        </div>
        
        <div className="flex flex-col items-center gap-4 px-4">
          <div className="bg-gray-300 animate-pulse h-12 w-32"></div>
          <div className="bg-gray-300 animate-pulse h-6 w-40"></div>
        </div>
      </div>
    );
  }

  return (
    <div id="instagram" className="bg-[#f2f2f2] pb-[75px]">
      {/* Mobile Instagram Grid - 3 stacked images */}
      <div className="block md:hidden mb-16 space-y-1">
        {mobileDisplayPosts.map((post) => (
          <a 
            key={post.id} 
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-square relative overflow-hidden group cursor-pointer"
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform group-hover:scale-105"
              style={{ backgroundImage: `url(${post.media_url})` }}
            >
              {post.caption && (
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center p-4">
                  <span className="text-white text-sm font-bold text-center uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {post.caption.length > 100 ? `${post.caption.substring(0, 100)}...` : post.caption}
                  </span>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* Desktop Instagram Grid - 4x2 grid */}
      <div className="hidden md:grid grid-cols-4 gap-1 mb-16">
        {displayPosts.map((post) => (
          <a 
            key={post.id} 
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square relative overflow-hidden group cursor-pointer"
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform group-hover:scale-105"
              style={{ backgroundImage: `url(${post.media_url})` }}
            >
              {post.caption && (
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center p-4">
                  <span className="text-white text-sm font-bold text-center uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {post.caption.length > 100 ? `${post.caption.substring(0, 100)}...` : post.caption}
                  </span>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* Follow Us Section */}
      <div className="flex flex-col items-center gap-4 px-4">
        <a 
          href="https://www.instagram.com/kamoathletics/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0b3a86] text-white px-10 py-4 text-[13.6px] tracking-[1px] uppercase font-bold hover:bg-[#0a2d6b] transition-colors"
        >
          FOLLOW US
        </a>
        <div className="text-center">
          <a 
            href="https://www.instagram.com/kamoathletics/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-[16px] leading-[25.6px] hover:text-gray-700 transition-colors"
          >
            @kamoathletics
          </a>
        </div>
      </div>
    </div>
  );
}