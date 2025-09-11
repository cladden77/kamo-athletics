import {defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Hero Title',
      type: 'string',
      description: 'Main headline for the hero section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Hero Subtitle',
      type: 'text',
      description: 'Supporting text below the main headline',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the call-to-action button',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'Hero section background image',
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
      name: 'titleColor',
      title: 'Title Color',
      type: 'color',
      description: 'Color of the hero title text',
    }),
    defineField({
      name: 'subtitleColor',
      title: 'Subtitle Color', 
      type: 'color',
      description: 'Color of the hero subtitle text',
    }),
    defineField({
      name: 'buttonColor',
      title: 'Button Background Color',
      type: 'color',
      description: 'Background color of the CTA button',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'backgroundImage',
    },
  },
})
