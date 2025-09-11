import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
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

    // Revalidate specific path or tag
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

    // Revalidate all content-related tags
    const contentTags = ['hero', 'about', 'teamMember', 'schedule', 'contact', 'footer', 'siteSettings']
    contentTags.forEach(tag => revalidateTag(tag))
    revalidatePath('/')

    return NextResponse.json({
      revalidated: true,
      message: 'All content revalidated',
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
