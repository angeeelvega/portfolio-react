import type { L10n } from '@/i18n/config';
import { site } from './site';

export interface Project {
  /** Locale-invariant: it is a proper noun. */
  name: string;
  /** Optional. Without it the card renders as plain text — no link, no arrow. */
  href?: string;
  /** Small line under the title, e.g. the event and year. */
  context?: L10n;
  bullets: L10n<string[]>;
}

/**
 * Deliberately short. The four old repos (Zenith, Poke Api, Booking App,
 * CV Builder) were replaced by a single link to GitHub — tutorial-grade
 * projects presented as portfolio pieces work against you.
 *
 * TODO(Ángel): add `href` once the hackathon repo is public.
 */
export const projects: Project[] = [
  {
    name: 'Sign Language Translation',
    context: {
      en: 'AI Hackathon Barranquilla · 2025',
      es: 'AI Hackathon Barranquilla · 2025',
    },
    bullets: {
      en: [
        'Real-time chatbot built with React and Node.js.',
        'Python APIs bridging the frontend with the processing services.',
        'Sign language translation prototype using NLP techniques.',
      ],
      es: [
        'Chatbot en tiempo real construido con React y Node.js.',
        'APIs en Python conectando el frontend con los servicios de procesamiento.',
        'Prototipo de traducción de lengua de señas usando técnicas de NLP.',
      ],
    },
  },
];

export const githubUrl = `https://github.com/${site.github}`;
