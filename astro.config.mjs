import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// Update this if a custom domain is ever attached. It drives canonical URLs,
// absolute Open Graph image URLs and the sitemap — none of which work without it.
const SITE = 'https://portfolio-angel-vega.vercel.app';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',

  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      // English lives at the root, Spanish under /es/. Slugs stay English in both.
      prefixDefaultLocale: false,
    },
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Geist',
      cssVariable: '--font-geist-sans',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/Geist-Variable.woff2'],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/GeistMono-Variable.woff2'],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
  ],

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', es: 'es-CO' },
      },
    }),
  ],

  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      // Without this, Shiki bakes the light theme in as literal inline
      // `color:`/`background-color:` on <pre> and every <span>, and exposes only
      // the dark theme as CSS variables. Inline styles win over any stylesheet,
      // so dark mode kept the light palette. `false` emits BOTH themes as
      // variables and leaves the choice to CSS.
      defaultColor: false,
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
