import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

/**
 * Posts live at `src/content/blog/{en,es}/<slug>.md`.
 *
 * The locale is derived from the directory in `entry.id` — never stored in
 * frontmatter — so it is impossible for the two to disagree. Two files that are
 * translations of each other share a `translationKey` (defaulting to the slug).
 *
 * `z` comes from `astro:content`, not the standalone `zod` package: Astro
 * bundles zod 4, and a second copy in node_modules yields two incompatible
 * schema classes.
 */
const blog = defineCollection({
  // A leading underscore marks a file as work-in-progress: it isn't even parsed.
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1).max(80),
      // Used verbatim as the meta and Open Graph description.
      description: z.string().min(1).max(160),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      translationKey: z.string().optional(),
      draft: z.boolean().default(false),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
    }),
});

export const collections = { blog };
