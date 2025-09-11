import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {schemaTypes} from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'KAMO Athletics',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ua5ga1nx',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Hero Section')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem()
              .title('About Section')
              .child(S.document().schemaType('about').documentId('about')),
            S.listItem()
              .title('Team Members')
              .child(S.documentTypeList('teamMember').title('Team Members')),
            S.listItem()
              .title('Class Schedule')
              .child(S.document().schemaType('schedule').documentId('schedule')),
            S.listItem()
              .title('Contact Section')
              .child(S.document().schemaType('contact').documentId('contact')),
            S.listItem()
              .title('Footer')
              .child(S.document().schemaType('footer').documentId('footer')),
            S.listItem()
              .title('Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
          ])
    }),
    visionTool(),
    colorInput()
  ],

  schema: {
    types: schemaTypes,
  },

})
