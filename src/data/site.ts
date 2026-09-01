import type { L10n } from '@/i18n/config';

export const site = {
  name: 'Ángel Vega',
  fullName: 'Ángel Vega Niño',
  email: 'angelantoniovega@gmail.com',
  github: 'angeeelvega',
  linkedin: 'angelvega1',
} as const;

/**
 * Page-level metadata. `description` is used verbatim as the meta description
 * and the Open Graph description.
 */
export const meta = {
  home: {
    title: {
      en: 'Ángel Vega — Software Engineer',
      es: 'Ángel Vega — Ingeniero de Software',
    },
    description: {
      en: 'Software engineer working on web platforms and data systems. Currently building data and AI solutions at NYXN.',
      es: 'Ingeniero de software enfocado en plataformas web y sistemas de datos. Actualmente construyendo soluciones de datos e IA en NYXN.',
    },
  },
} satisfies Record<string, { title: L10n; description: L10n }>;

/**
 * The opening of the page — no hero, no job title, straight into prose.
 *
 * Three short lines, on purpose. The stack, the history and the ways to reach
 * him all have their own section further down, so this is only what those
 * sections cannot say: the electronics background still showing, and how he
 * works.
 */
export const intro = {
  tagline: {
    en: 'Electronics → Software → AI · Colombia 🇨🇴',
    es: 'Electrónica → Software → IA · Colombia 🇨🇴',
  },
  paragraphs: {
    en: [
      'I build software. Hardware is where I started.',
      'Always learning something new.',
      'Now at NYXN.',
    ],
    es: [
      'Construyo software. El hardware es donde empecé.',
      'Siempre aprendiendo algo nuevo.',
      'Ahora en NYXN.',
    ],
  },
} satisfies { tagline: L10n; paragraphs: L10n<string[]> };
