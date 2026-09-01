import {
  siAngular,
  siDatadog,
  siDocker,
  siFlask,
  siGithub,
  siGithubactions,
  siGoogleanalytics,
  siGooglegemini,
  siN8n,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPython,
  siReact,
  siShadcnui,
  siSonarqubeserver,
  siSpringboot,
  siTerraform,
  siTypescript,
} from 'simple-icons';

/**
 * Minimal icon shape. Both `simple-icons` entries and the locally authored
 * ones below satisfy it, so `BrandIcon` renders either without caring.
 */
export interface Icon {
  title: string;
  /** A single SVG path, drawn in a 24x24 viewBox. */
  path: string;
}

/**
 * Locally authored icons.
 *
 * `simple-icons` has REMOVED several brands after trademark requests — as of
 * v16 there is no LinkedIn, AWS, Oracle or OpenAI. LinkedIn matters here (it's
 * one of the two social links), so its mark is kept locally, normalised to the
 * same 24x24 viewBox everything else uses.
 *
 * The rest are handled by simply having no icon: `Tool.icon` is optional, and
 * a tool without one renders as a name-only cell. Better an honest gap than an
 * invented logo.
 */
const linkedin: Icon = {
  title: 'LinkedIn',
  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
};

/** Not a brand — a plain envelope for the email link. */
const mail: Icon = {
  title: 'Email',
  path: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
};

export const icons = {
  // Social
  github: siGithub,
  linkedin,
  mail,

  // Frontend
  react: siReact,
  nextjs: siNextdotjs,
  angular: siAngular,
  typescript: siTypescript,
  shadcn: siShadcnui,

  // Backend
  java: siOpenjdk,
  springBoot: siSpringboot,
  python: siPython,
  flask: siFlask,
  node: siNodedotjs,

  // AI & automation
  gemini: siGooglegemini,
  n8n: siN8n,

  // Cloud & DevOps
  docker: siDocker,
  terraform: siTerraform,
  githubActions: siGithubactions,

  // Observability & quality
  datadog: siDatadog,
  googleAnalytics: siGoogleanalytics,
  sonarqube: siSonarqubeserver,
} satisfies Record<string, Icon>;
