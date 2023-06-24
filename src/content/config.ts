import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string().max(100),
      date: z.string().datetime(),
      categories: z.array(z.enum(["Code", "Food", "Travel"])),
      summary: z.string(),
    }),
  }),
};
