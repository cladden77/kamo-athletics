import { client } from './client'

// Helper function to fetch data with error handling and Next.js cache tags
export async function sanityFetch<T = any>({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params?: any
  tags?: string[]
}): Promise<T> {
  try {
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    return await client.fetch<T>(query, params, {
      next: { 
        tags,
        // In development, cache for shorter time for faster updates
        // In production, cache for longer but allow revalidation via tags
        revalidate: isDevelopment ? 10 : 3600, // 10 seconds in dev, 1 hour in prod
      },
    })
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return null as T
  }
}
