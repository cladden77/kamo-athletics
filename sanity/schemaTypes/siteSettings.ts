import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'The title of the website (appears in browser tab)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'Brief description of the website for SEO',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      description: 'Main logo for the website',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule) => Rule.required(),
        }
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation Menu',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Menu Item Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'sectionId',
              title: 'Section ID',
              type: 'string',
              description: 'ID of the section this menu item scrolls to',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }
      ],
      description: 'Navigation menu items',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Text for the call-to-action button in navigation',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'primaryColor',
      title: 'Primary Brand Color',
      type: 'color',
      description: 'Primary brand color used throughout the site',
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Secondary Brand Color',
      type: 'color',
      description: 'Secondary brand color used throughout the site',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'logo',
    },
  },
})
