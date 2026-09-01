import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge conditional class names, resolving Tailwind conflicts (later wins).
 *
 * In `.astro` files this runs at build time only — it contributes nothing to
 * the client bundle. It also keeps the project compatible with the shadcn CLI,
 * whose generated components import `cn` from this exact path.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
