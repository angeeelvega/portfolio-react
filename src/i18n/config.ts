export const LOCALES = ['en', 'es'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** BCP 47 tags, used for `<html lang>`, `Intl` and `hreflang`. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: 'en-US',
  es: 'es-CO',
};

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
};

/**
 * A value that must be provided in every locale.
 *
 * Structured content is localized per *field* rather than per *file*. Two
 * parallel `projects.en.ts` / `projects.es.ts` files drift the moment you add
 * an entry to one and forget the other, and nothing catches it. Here, a missing
 * translation is a type error.
 */
export type L10n<T = string> = Record<Locale, T>;

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
