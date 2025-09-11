import {defineField, defineType} from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'Contact Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading for the contact section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coOwnersTitle',
      title: 'Co-owners Title',
      type: 'string',
      description: 'Title for the co-owners section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Gym Address',
      type: 'text',
      description: 'Physical address of the gym',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mapPlaceholder',
      title: 'Map Placeholder Text',
      type: 'string',
      description: 'Text to display in the map placeholder',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      description: 'Background color of the contact section',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'color',
      description: 'Color of the main text',
    }),
    defineField({
      name: 'cardBackgroundColor',
      title: 'Contact Card Background Color',
      type: 'color',
      description: 'Background color of the contact cards',
    }),
    defineField({
      name: 'cardTextColor',
      title: 'Contact Card Text Color',
      type: 'color',
      description: 'Text color for the contact cards',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'coOwnersTitle',
    },
  },
})
