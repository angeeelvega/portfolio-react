---
title: 'Hello world'
description: 'A placeholder first post — and a typography regression test for the blog.'
pubDate: 2026-09-01
tags: ['meta']
translationKey: 'hello-world'
---

This is a placeholder. Replace it with something you actually want to say — but
keep the shape, because this post doubles as a visual regression test for every
element the blog can render.

## Why write here

Notes age better than threads. A post you can link to six months later is worth
more than the same idea scattered across replies.

### Code

Fenced blocks are highlighted with Shiki using two themes, swapped off the same
`.dark` class as the rest of the site — so they follow the theme toggle rather
than the operating system.

```ts
export function readingMinutes(markdown: string): number {
  const words = markdown.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
```

Inline `code` should sit on the muted surface without breaking the line rhythm.

### Lists and quotes

- Bullets stay in the muted foreground colour.
- Nested items keep their indentation.
- Long items wrap against the same measure as body text.

> A blockquote borrows the border token, so it stays consistent in both themes
> without a second set of colour rules.

### Tables

Wide content scrolls inside its own container rather than pushing the page
sideways.

| Token                | Light    | Dark        |
| -------------------- | -------- | ----------- |
| `--background`       | white    | near-black  |
| `--muted-foreground` | mid grey | light grey  |
| `--brand`            | blue     | lifted blue |

And an [inline link](https://astro.build) picks up the single accent colour.
