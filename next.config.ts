import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enable tag-based revalidation
    staleTimes: {
      dynamic: 30, // 30 seconds for dynamic pages
      static: 180, // 3 minutes for static pages  
    },
  },
  // Configure logging for debugging revalidation
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === 'development',
    },
  },
  // Configure images for external domains and local proxy route
  images: {
    localPatterns: [
      {
        pathname: '/api/image-proxy',
        // Omit search to allow the dynamic ?url=... query param
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      },
    ],
  },
};

export default nextConfig;
