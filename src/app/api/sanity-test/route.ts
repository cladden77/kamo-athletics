import { NextRequest, NextResponse } from 'next/server'
import { createClient } from 'next-sanity'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') || 'hero'
    
    // Create a fresh client with no caching for testing
    const testClient = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ua5ga1nx',
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: false,
      perspective: 'previewDrafts', // Always show latest including drafts
      token: process.env.SANITY_API_TOKEN,
    })

    const query = `*[_type == "${type}"][0]`
    
    // Fetch with absolutely no caching
    const data = await testClient.fetch(query, {}, {
      next: { revalidate: 0 }, // No caching at all
    })

    return NextResponse.json({
      success: true,
      type,
      timestamp: new Date().toISOString(),
      data,
      environment: process.env.NODE_ENV,
      clientPerspective: 'previewDrafts',
      caching: 'disabled',
    })
  } catch (error) {
    console.error('Sanity test error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    }, { status: 500 })
  }
}
