import { defineCollection, z } from "astro:content";

export const blogCollections = {
  blog: defineCollection({
    schema: z.object({
      title: z
        .string()
        .max(
          100,
          "For SEO optimization, please provide a title and relevant keywords"
        ),
      date: z.date().optional(),
      categories: z.array(z.enum(["Code", "Food", "Travel"])),
      summary: z.string().optional(),
      image: z.string(),
      slug: z.string(),
    }),
  }),
};
