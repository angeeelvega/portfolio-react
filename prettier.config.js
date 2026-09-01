/** @type {import('prettier').Config} */
const config = {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  singleQuote: true,
  trailingComma: 'es5',
  semi: true,
  tabWidth: 2,
  printWidth: 100,
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};

export default config;
