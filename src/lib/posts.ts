import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@/i18n/config';
import { readingMinutes } from '@/i18n/reading-time';

export interface Post {
  entry: CollectionEntry<'blog'>;
  /** The path segment, with the locale prefix removed. */
  slug: string;
  lang: Locale;
  /** Shared across translations of the same post. */
  key: string;
  minutes: number;
}

function decorate(entry: CollectionEntry<'blog'>, lang: Locale): Post {
  const slug = entry.id.slice(lang.length + 1);
  return {
    entry,
    slug,
    lang,
    key: entry.data.translationKey ?? slug,
    minutes: readingMinutes(entry.body ?? ''),
  };
}

/** Published posts for one locale, newest first. Drafts show in dev only. */
export async function getPosts(lang: Locale): Promise<Post[]> {
  const entries = await getCollection(
    'blog',
    ({ id, data }) => id.startsWith(`${lang}/`) && (import.meta.env.DEV || !data.draft)
  );

  return entries
    .map((entry) => decorate(entry, lang))
    .sort((a, b) => b.entry.data.pubDate.getTime() - a.entry.data.pubDate.getTime());
}

/**
 * The counterpart of `post` in the other locale, or `null` when it doesn't
 * exist. A missing translation is a real state, not an error: the post simply
 * has no URL in that language.
 */
export async function getTranslation(post: Post, target: Locale): Promise<Post | null> {
  const candidates = await getPosts(target);
  return candidates.find((candidate) => candidate.key === post.key) ?? null;
}
