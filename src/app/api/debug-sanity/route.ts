import { NextRequest, NextResponse } from 'next/server'
import { sanityFetch } from '@/sanity/lib/fetch'
import { heroQuery } from '../../../../sanity/queries'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') || 'hero'
    
    let query = heroQuery
    let description = 'Hero Section'
    
    switch (type) {
      case 'hero':
        query = `*[_type == "hero"][0]`
        description = 'Hero Section'
        break
      case 'about':
        query = `*[_type == "about"][0]`
        description = 'About Section'
        break
      case 'contact':
        query = `*[_type == "contact"][0]`
        description = 'Contact Section'
        break
      case 'all':
        query = `{
          "hero": *[_type == "hero"][0],
          "about": *[_type == "about"][0],
          "contact": *[_type == "contact"][0],
          "teamMembers": *[_type == "teamMember"],
          "schedule": *[_type == "schedule"][0],
          "footer": *[_type == "footer"][0],
          "siteSettings": *[_type == "siteSettings"][0]
        }`
        description = 'All Content'
        break
    }

    const data = await sanityFetch({
      query,
      tags: [type]
    })

    return NextResponse.json({
      success: true,
      description,
      timestamp: new Date().toISOString(),
      data,
      environment: process.env.NODE_ENV,
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    })
  } catch (error) {
    console.error('Debug Sanity error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    }, { status: 500 })
  }
}
