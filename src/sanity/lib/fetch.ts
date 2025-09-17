import { client } from './client'

// Helper function to fetch data with error handling and Next.js cache tags
export async function sanityFetch<T = unknown>({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params?: Record<string, unknown>
  tags?: string[]
}): Promise<T> {
  try {
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    return await client.fetch<T>(query, params, {
      next: { 
        tags,
        // In development, disable caching completely for real-time updates
        // In production, cache but allow revalidation via tags/webhooks
        revalidate: isDevelopment ? 0 : 60, // No cache in dev, 1 minute in prod
      },
    })
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return null as T
  }
}
