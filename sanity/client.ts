import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ua5ga1nx',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false, // Disable CDN for real-time updates during development
  apiVersion: '2024-01-01',
  perspective: process.env.NODE_ENV === 'development' ? 'drafts' : 'published', // Fetch drafts in dev, published in prod
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Helper function to fetch data with error handling
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
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ua5ga1nx';
    
    // Return null if no valid project ID is configured
    if (projectId === 'placeholder') {
      console.warn('Sanity project ID not configured, returning null data')
      return null as T
    }
    
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    return await client.fetch<T>(query, params, {
      next: { 
        tags,
        // In development, disable caching completely for real-time updates
        // In production, revalidate every 60 seconds
        revalidate: isDevelopment ? 0 : 60,
      },
    })
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return null as T
  }
}
