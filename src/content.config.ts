import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    cover: z.string().optional(),
    pubDate: z.date(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const caseStudiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    cover: z.string().optional(),
    pubDate: z.date(),
    client: z.string().optional(),
    location: z.string().optional(),
    services: z.array(z.string()).optional(),
    results: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  "case-studies": caseStudiesCollection,
};