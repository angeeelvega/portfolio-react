import { DEFAULT_LOCALE, isLocale, LOCALE_TAGS, type Locale } from './config';
import { dict, type UIKey } from './ui';

/** Derive the active locale from a URL pathname. */
export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return first && isLocale(first) ? first : DEFAULT_LOCALE;
}

/**
 * Returns a `t(key, params?)` lookup for the given locale.
 * Supports `{name}` placeholders, e.g. `t('blog.readingTime', { n: 4 })`.
 */
export function useTranslations(lang: Locale) {
  return function t(key: UIKey, params?: Record<string, string | number>): string {
    const value = dict[lang][key];
    if (!params) return value;
    return value.replace(/\{(\w+)\}/g, (match, name: string) =>
      name in params ? String(params[name]) : match
    );
  };
}

/** Strip a leading locale segment, always returning a path with a leading slash. */
export function stripLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] && isLocale(segments[0])) segments.shift();
  return '/' + segments.join('/');
}

/**
 * Build a path for `lang`. The default locale is unprefixed (`/blog/`), every
 * other locale is prefixed (`/es/blog/`). Always ends in a slash to match the
 * project's `trailingSlash: 'always'`.
 */
export function localizePath(path: string, lang: Locale): string {
  const clean = stripLocale(path).replace(/^\/+|\/+$/g, '');
  const segments = lang === DEFAULT_LOCALE ? [clean] : [lang, clean];
  const joined = segments.filter(Boolean).join('/');
  return joined ? `/${joined}/` : '/';
}

/** The other locale — this site is deliberately two-language only. */
export function otherLocale(lang: Locale): Locale {
  return lang === 'en' ? 'es' : 'en';
}

/** Absolute URL for canonical tags, OG images and hreflang. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  return new URL(path, site ?? 'http://localhost').href;
}

/**
 * Format an ISO `YYYY-MM` or `YYYY` string for display.
 *
 * Dates are stored as ISO and formatted at render time. Storing a preformatted
 * `"October 2022 - Present"` — as the previous site did — hardcodes English
 * into the data layer, which a bilingual site cannot do.
 */
export function formatMonthYear(iso: string, lang: Locale): string {
  const tag = LOCALE_TAGS[lang];

  if (/^\d{4}$/.test(iso)) return iso;

  const [year, month] = iso.split('-').map(Number);
  if (!year || !month) return iso;

  // UTC noon avoids the timezone off-by-one that shifts a month backwards.
  const date = new Date(Date.UTC(year, month - 1, 15));
  const formatted = new Intl.DateTimeFormat(tag, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);

  // es-CO renders "mar 2026"; capitalise for consistency with en-US "Mar 2026".
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

/** `Mar 2026 – Present` / `Mar 2026 – Actualidad`. */
export function formatDateRange(start: string, end: string | null, lang: Locale): string {
  const t = useTranslations(lang);
  const from = formatMonthYear(start, lang);
  if (start === end) return from;
  const to = end ? formatMonthYear(end, lang) : t('experience.present');
  return `${from} – ${to}`;
}

/** Long-form date for blog posts. */
export function formatDate(date: Date, lang: Locale): string {
  const formatted = new Intl.DateTimeFormat(LOCALE_TAGS[lang], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

/** `YYYY-MM-DD`, for the `datetime` attribute on `<time>`. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
