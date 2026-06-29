import { defineCollection } from 'astro:content'

import {glob, file} from 'astro/loaders'

import {z} from 'astro/zod'

//Defining a loader for collection
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}'}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  })
})

export const collections = {blog}
