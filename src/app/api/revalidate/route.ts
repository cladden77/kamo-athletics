import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

async function handleRevalidation(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')
    const path = searchParams.get('path')
    const tag = searchParams.get('tag')

    // Check for secret to prevent unauthorized revalidation
    if (secret !== process.env.REVALIDATION_SECRET && secret !== 'dev-revalidate') {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      )
    }

    // Handle Sanity webhook payload for targeted revalidation (only for POST requests)
    let body;
    if (request.method === 'POST') {
      try {
        body = await request.json()
      } catch (e) {
        // If no JSON body, continue with query params
      }
    }

    // Revalidate specific path or tag from query params
    if (path) {
      revalidatePath(path)
      return NextResponse.json({
        revalidated: true,
        path,
        now: Date.now(),
      })
    }

    if (tag) {
      revalidateTag(tag)
      return NextResponse.json({
        revalidated: true,
        tag,
        now: Date.now(),
      })
    }

    // Handle Sanity webhook payload for intelligent revalidation
    if (body?._type) {
      const documentType = body._type
      
      // Map document types to cache tags
      const typeToTagMap: Record<string, string> = {
        'hero': 'hero',
        'about': 'about',
        'teamMember': 'teamMember',
        'schedule': 'schedule',
        'contact': 'contact',
        'footer': 'footer',
        'siteSettings': 'siteSettings'
      }

      const tagToRevalidate = typeToTagMap[documentType]
      
      if (tagToRevalidate) {
        revalidateTag(tagToRevalidate)
        revalidatePath('/') // Also revalidate the home page
        
        return NextResponse.json({
          revalidated: true,
          documentType,
          tag: tagToRevalidate,
          message: `Revalidated ${documentType} content`,
          now: Date.now(),
        })
      }
    }

    // Fallback: Revalidate all content-related tags
    const contentTags = ['hero', 'about', 'teamMember', 'schedule', 'contact', 'footer', 'siteSettings']
    contentTags.forEach(tag => revalidateTag(tag))
    revalidatePath('/')

    return NextResponse.json({
      revalidated: true,
      message: 'All content revalidated',
      tags: contentTags,
      now: Date.now(),
    })
  } catch (err) {
    console.error('Error revalidating:', err)
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    )
  }
}

// Support both GET and POST requests
export async function GET(request: NextRequest) {
  return handleRevalidation(request)
}

export async function POST(request: NextRequest) {
  return handleRevalidation(request)
}
