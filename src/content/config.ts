// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content"

// 2. Define your collection(s)
const blogCollection = defineCollection({
    type: "content", // v2.5.0 and later
    schema: z.object({
        id: z.number(),
        publishDate: z.date(),
        author: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        relatedUrls: z.array(z.string()),
    }),
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    blog: blogCollection,
}
