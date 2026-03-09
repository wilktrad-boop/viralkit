import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    category: z.enum(['planification', 'creation', 'analytics', 'seo-youtube', 'croissance', 'automatisation']),
    type: z.enum(['avis', 'comparatif', 'guide']),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    rating: z.number().min(0).max(10).optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    cta: z.object({
      label: z.string(),
      url: z.string(),
      note: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { articles };
