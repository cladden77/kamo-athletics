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
};

export default nextConfig;
