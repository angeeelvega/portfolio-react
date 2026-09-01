import type { Locale } from './config';

/**
 * UI chrome strings.
 *
 * The English object is the source of the key type, so `dict` below fails to
 * compile if the Spanish translation is missing a key or has one too many.
 */
const en = {
  // Lowercase on purpose: it sits in the hero row next to the social icons.
  'nav.blog': 'blog',
  'nav.home': 'Home',

  'section.projects': 'Projects',
  'section.experience': 'Experience',
  'section.skills': 'Skills',
  'section.elsewhere': 'Elsewhere',

  'projects.more': 'More on GitHub',
  'experience.present': 'Present',

  'blog.title': 'Blog',
  'blog.description': 'Notes on software, data and the things I build.',
  'blog.readingTime': '{n} min read',
  'blog.back': 'All posts',
  'blog.empty': 'Nothing published yet.',
  'blog.updated': 'Updated {date}',
  // Names the language being switched TO, not the one you are reading.
  'blog.noTranslation': 'This post is not available in Spanish yet.',

  'theme.toggle': 'Toggle theme',
  'lang.switch': 'Ver en español',

  '404.title': 'Page not found',
  '404.body': 'That page does not exist, or it moved.',
  '404.home': 'Go home',
} as const;

export type UIKey = keyof typeof en;

const es: Record<UIKey, string> = {
  'nav.blog': 'blog',
  'nav.home': 'Inicio',

  'section.projects': 'Proyectos',
  'section.experience': 'Experiencia',
  'section.skills': 'Habilidades',
  'section.elsewhere': 'En otros lados',

  'projects.more': 'Más en GitHub',
  'experience.present': 'Actualidad',

  'blog.title': 'Blog',
  'blog.description': 'Notas sobre software, datos y las cosas que construyo.',
  'blog.readingTime': '{n} min de lectura',
  'blog.back': 'Todos los posts',
  'blog.empty': 'Todavía no hay nada publicado.',
  'blog.updated': 'Actualizado el {date}',
  'blog.noTranslation': 'Este post todavía no está disponible en inglés.',

  'theme.toggle': 'Cambiar tema',
  'lang.switch': 'View in English',

  '404.title': 'Página no encontrada',
  '404.body': 'Esa página no existe, o se movió.',
  '404.home': 'Ir al inicio',
};

export const dict: Record<Locale, Record<UIKey, string>> = { en, es };
