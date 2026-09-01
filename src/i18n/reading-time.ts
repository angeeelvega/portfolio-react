const WORDS_PER_MINUTE = 200;

/**
 * Estimate reading time in whole minutes from raw Markdown.
 *
 * Computed from `entry.body` rather than a remark plugin: under Astro 7's
 * Sätteri pipeline a remark plugin would drag `@astrojs/markdown-remark` back
 * into the dependency graph, and the result would still need localizing at
 * render time anyway.
 */
export function readingMinutes(markdown: string): number {
  const text = markdown
    .replace(/^---\n[\s\S]*?\n---/, '') // frontmatter
    .replace(/```[\s\S]*?```/g, '') // fenced code
    .replace(/`[^`]*`/g, '') // inline code
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> their text
    .replace(/<[^>]+>/g, ' ') // html
    .replace(/[#>*_~|-]/g, ' '); // markdown punctuation

  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
