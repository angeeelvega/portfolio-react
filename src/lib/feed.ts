import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '@/data/site';
import type { Locale } from '@/i18n/config';
import { localizePath, useTranslations } from '@/i18n/utils';
import { getPosts } from './posts';

/** One feed per locale, listing only the posts that exist in that language. */
export async function buildFeed(lang: Locale, context: APIContext) {
  const t = useTranslations(lang);
  const posts = await getPosts(lang);

  return rss({
    title: `${site.fullName} — ${t('blog.title')}`,
    description: t('blog.description'),
    site: context.site ?? 'https://portfolio-angel-vega.vercel.app',
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.entry.data.title,
      description: post.entry.data.description,
      pubDate: post.entry.data.pubDate,
      link: localizePath(`/blog/${post.slug}`, lang),
      categories: post.entry.data.tags,
    })),
    customData: `<language>${lang}</language>`,
  });
}
