import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disabled for ISR and tag-based revalidation
  perspective: 'published',
  token: process.env.SANITY_API_TOKEN,
})
