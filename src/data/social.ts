import { icons, type Icon } from '@/data/icons';
import { site } from './site';

export interface SocialLink {
  /** Locale-invariant: these are proper nouns. */
  label: string;
  href: string;
  /** Shown next to the label in the "Elsewhere" section. */
  handle: string;
  icon: Icon;
}

/**
 * Instagram was deliberately dropped rather than fixed. It was off-register for
 * an engineering portfolio and was the source of the two `yourusername`
 * placeholder URLs on the previous site.
 */
export const social: SocialLink[] = [
  {
    label: 'GitHub',
    href: `https://github.com/${site.github}`,
    handle: `@${site.github}`,
    icon: icons.github,
  },
  {
    label: 'LinkedIn',
    href: `https://www.linkedin.com/in/${site.linkedin}/`,
    handle: `/${site.linkedin}`,
    icon: icons.linkedin,
  },
  {
    label: 'Email',
    href: `mailto:${site.email}`,
    handle: site.email,
    icon: icons.mail,
  },
];
