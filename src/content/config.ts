// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content"

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
        tags: z.array(reference("tags")),
        relatedUrls: z.array(reference("blog")),
    }),
})

const tagCollection = defineCollection({
    type: "content", // v2.5.0 and later
    schema: z.object({
        label: z.string(),
        image: z.optional(
            z.object({
                src: z.string(),
                alt: z.string(),
            })
        ),
    }),
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    blog: blogCollection,
    tags: tagCollection,
}
