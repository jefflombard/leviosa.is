import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      order: z.number().default(0),
      role: z.string().optional(),
      bio: z.string().optional(),
      quote: z.string().optional(),
      details: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      treatments: z.array(reference("treatments")).default([]),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      socials: z
        .array(
          z.object({
            label: z.string(),
            href: z.string(),
          })
        )
        .optional(),
    }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
      author: reference("team").optional(),
      treatment: reference("treatments").optional(),
      summary: z.array(z.string()).default([]),
    }),
});

const legal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});

const treatments = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/treatments" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number().default(0),
      icon: z.string(),
      headline: z.string().optional(),
      description: z.string(),
      duration: z.string(),
      price: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      details: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      steps: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
      faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    }),
});

const stories = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/stories" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number().default(0),
      patient: z.string(),
      quote: z.string(),
      description: z.string(),
      treatment: reference("treatments"),
      dentist: reference("team").optional(),
      details: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
    }),
});

const roles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/roles" }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(0),
    type: z.string(),
    salary: z.string(),
    description: z.string(),
    details: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  }),
});

export const collections = {
  treatments,
  team,
  posts,
  legal,
  stories,
  roles,
};
