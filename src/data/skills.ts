import { icons, type Icon } from '@/data/icons';

export interface Tool {
  /** Locale-invariant: technology names are proper nouns. */
  name: string;
  /**
   * Optional. `simple-icons` dropped AWS, Oracle and OpenAI after trademark
   * requests, so those render as name-only cells rather than fake logos.
   */
  icon?: Icon;
}

/**
 * Products, rendered as an icon grid.
 *
 * Note AWS is ONE entry. The previous version listed every service
 * ('AWS (Lambda, S3, RDS, API Gateway, CloudWatch, IAM, EC2)'), which read as
 * padding — the brand is the useful signal, not the service inventory.
 */
export const tools: Tool[] = [
  { name: 'React', icon: icons.react },
  { name: 'Next.js', icon: icons.nextjs },
  { name: 'Angular', icon: icons.angular },
  { name: 'TypeScript', icon: icons.typescript },
  { name: 'shadcn/ui', icon: icons.shadcn },
  { name: 'Java', icon: icons.java },
  { name: 'Spring Boot', icon: icons.springBoot },
  { name: 'Python', icon: icons.python },
  { name: 'Flask', icon: icons.flask },
  { name: 'Node.js', icon: icons.node },
  { name: 'AWS' },
  { name: 'Docker', icon: icons.docker },
  { name: 'Terraform', icon: icons.terraform },
  { name: 'GitHub Actions', icon: icons.githubActions },
  { name: 'Oracle' },
  { name: 'n8n', icon: icons.n8n },
  { name: 'OpenAI' },
  { name: 'Gemini', icon: icons.gemini },
  { name: 'Datadog', icon: icons.datadog },
  { name: 'SonarQube', icon: icons.sonarqube },
  { name: 'Google Analytics', icon: icons.googleAnalytics },
];
