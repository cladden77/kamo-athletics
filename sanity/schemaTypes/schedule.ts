import {defineField, defineType} from 'sanity'

export const schedule = defineType({
  name: 'schedule',
  title: 'Class Schedule',
  type: 'document',
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Badge Text',
      type: 'string',
      description: 'Text for the small badge above the heading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading for the schedule section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description text for the schedule section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'weekdaySchedule',
      title: 'Weekday Schedule',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Weekday Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'times',
          title: 'Class Times',
          type: 'string',
          description: 'Class times separated by | (e.g., "515am | 630am | 930am")',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'weekendSchedule',
      title: 'Weekend Schedule',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Weekend Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'times',
          title: 'Class Times',
          type: 'string',
          description: 'Class times separated by | (e.g., "8am | 9am")',
          validation: (Rule) => Rule.required(),
        }),
      ],
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
      name: 'scheduleImage',
      title: 'Schedule Image',
      type: 'image',
      description: 'Image displayed alongside the schedule',
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
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      description: 'Background color of the schedule section',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'color',
      description: 'Color of the text in the schedule section',
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
      title: 'heading',
      subtitle: 'badgeText',
      media: 'scheduleImage',
    },
  },
})
