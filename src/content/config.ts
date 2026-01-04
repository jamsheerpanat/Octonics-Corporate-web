import { defineCollection, z } from "astro:content";

// ✅ Blog collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    summary: z.string().optional(),
    author: z.string().default("Octonics Innovations"),
    pubDate: z.union([z.string(), z.date()]),
    updatedDate: z.union([z.string(), z.date()]).optional(),
    heroImage: z.string().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// ✅ Case Studies collection schema
const caseStudiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    client: z.string().optional(),
    location: z.string().optional(),
    cover: z.string().optional(),
    pubDate: z.union([z.string(), z.date()]).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  "case-studies": caseStudiesCollection,
};