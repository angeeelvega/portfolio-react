# portfolio

Personal site of Ángel Vega — [portfolio-angel-vega.vercel.app](https://portfolio-angel-vega.vercel.app)

Bilingual (English at `/`, Spanish at `/es/`), with a blog. Static, no client-side
framework: the whole site ships about 1 KB of hand-written JavaScript.

## Stack

|               |                                                                            |
| ------------- | -------------------------------------------------------------------------- |
| Framework     | [Astro 7](https://astro.build) (static output)                             |
| Styling       | Tailwind CSS 4 via `@tailwindcss/vite`                                     |
| Design tokens | [shadcn/ui](https://ui.shadcn.com) `new-york` / `neutral`, **tokens only** |
| Fonts         | Geist Sans + Geist Mono, self-hosted via Astro's `fonts` config            |
| Content       | Astro Content Collections (Markdown, Zod-validated frontmatter)            |
| Hosting       | Vercel (GitHub integration, no config file)                                |

Requires **Node >= 22.12** and **pnpm 11** (`corepack enable`).

## Commands

```sh
pnpm install
pnpm dev        # dev server on :4321
pnpm build      # astro check && astro build
pnpm preview    # serve the production build
pnpm format     # prettier
```

## Layout

```
src/
  content/blog/{en,es}/   Posts. Locale comes from the directory, never frontmatter.
  data/                   CV content as typed TS. Both languages per field.
  i18n/                   Locale config, UI dictionary, date/path helpers.
  components/ui/          Primitives. shadcn-compatible, written as .astro.
  pages/_*.astro          Shared page bodies (the `_` prefix keeps them unrouted).
```

### Adding a blog post

Create `src/content/blog/en/<slug>.md` (and/or `es/`). Posts that are
translations of each other share a `translationKey`:

```yaml
---
title: 'A title'
description: 'One line, max 160 characters — used as the meta description.'
pubDate: 2026-09-01
tags: ['note']
translationKey: 'a-title'
---
```

A post only needs to exist in one language. The other locale simply won't have a
URL for it, and the language switcher falls back to that locale's blog index
instead of 404-ing.

Prefix a filename with `_` to keep it out of the build entirely.

### Adding React

None is installed, because nothing on the site needs it. If that changes, the
token layer, `components.json` and the `@/*` alias are already in place:

```sh
pnpm astro add react
pnpm dlx shadcn add button
```

## Conventions

- **Dates are stored as ISO** (`2022-10`, or `null` for current) and formatted at
  render time with `Intl`. Never store a preformatted date string — it hardcodes
  one language into the data.
- **`--brand` is the only accent.** shadcn's `--accent` is a hover grey; do not
  repurpose it.
- Prose overrides in `global.css` are deliberately unlayered, so they beat
  `@tailwindcss/typography`'s `utilities` layer.
