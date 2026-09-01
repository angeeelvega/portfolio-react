import type { L10n } from '@/i18n/config';

export interface Role {
  title: L10n;
  /** ISO `YYYY-MM` or `YYYY`. Formatted at render time, never pre-formatted. */
  start: string;
  /** `null` means current. */
  end: string | null;
  bullets: L10n<string[]>;
}

export interface Company {
  name: string;
  url?: string;
  roles: Role[];
}

/**
 * Source of truth: Cv_Angel_Vega.pdf (not committed — it contains a private
 * phone number).
 *
 * Rendered in exactly this order. It is close to reverse-chronological, but
 * Guarapo Labs sits last on purpose rather than by date: it was a short
 * engagement that overlapped Seguros Bolívar, and slotting it between the two
 * long roles read like a mistake.
 */
export const experience: Company[] = [
  {
    name: 'NYXN',
    roles: [
      {
        title: { en: 'Data & AI Engineer', es: 'Ingeniero de Datos e IA' },
        start: '2026-03',
        end: null,
        bullets: {
          en: [
            'Lead data governance consulting — defining policies, standards and practices for how information is managed.',
            'Write technical and functional documentation aligned to ISO/IEC 42001 for internal audits, covering traceability, compliance and quality in AI systems.',
            'Design and support AWS architectures for data and AI solutions.',
            'Design, deploy and monitor data pipelines, keeping processing available, correct and efficient.',
          ],
          es: [
            'Lidero consultorías de gobierno de datos, definiendo políticas, estándares y buenas prácticas para la gestión de la información.',
            'Elaboro documentación técnica y funcional alineada a la norma ISO/IEC 42001 para auditorías internas, cubriendo trazabilidad, cumplimiento y calidad en sistemas de inteligencia artificial.',
            'Diseño y apoyo la implementación de arquitecturas en AWS para soluciones basadas en datos e inteligencia artificial.',
            'Diseño, despliego y monitoreo pipelines de datos, asegurando disponibilidad, calidad y eficiencia en el procesamiento.',
          ],
        },
      },
    ],
  },
  {
    name: 'Seguros Bolívar',
    url: 'https://www.segurosbolivar.com/',
    roles: [
      {
        title: {
          en: 'Software Engineer / Technical Lead',
          es: 'Ingeniero de Software / Líder Técnico',
        },
        start: '2022-10',
        end: '2026-02',
        bullets: {
          en: [
            'Technically led development and maintenance of a data-driven self-service platform for group insurance policies, coordinating decisions across frontend, backend and integrations.',
            'Built frontend modules in Angular against Java (Spring Boot) services, and connected legacy enterprise systems over SOAP/XML.',
            'Designed advanced PL/SQL — stored procedures, triggers, cursors and business-rule validation — to guarantee the integrity of the data the applications consumed.',
            'Automated operational flows with n8n and LLM APIs (OpenAI, Gemini), implemented RAG for internal knowledge, and integrated OCR for document processing.',
            'Built CI/CD pipelines with GitHub Actions and quality gates with SonarQube, supported AWS deployments with Infrastructure as Code, and mentored the team on code quality.',
          ],
          es: [
            'Lideré técnicamente el desarrollo y mantenimiento de una plataforma autogestionada basada en datos para pólizas colectivas, coordinando decisiones entre frontend, backend e integraciones.',
            'Desarrollé módulos frontend en Angular contra servicios en Java (Spring Boot), y conecté sistemas legacy empresariales vía SOAP/XML.',
            'Diseñé lógica avanzada en PL/SQL — procedimientos almacenados, triggers, cursores y validación de reglas de negocio — para garantizar la integridad de los datos que consumían las aplicaciones.',
            'Automaticé flujos operativos con n8n y APIs de LLM (OpenAI, Gemini), implementé arquitecturas RAG para el conocimiento interno, e integré OCR para procesamiento de documentos.',
            'Implementé pipelines CI/CD con GitHub Actions y control de calidad con SonarQube, apoyé despliegues en AWS con Infrastructure as Code, y acompañé al equipo en calidad de código.',
          ],
        },
      },
    ],
  },
  {
    name: 'Guarapo Labs',
    roles: [
      {
        title: { en: 'Frontend / Full Stack Engineer', es: 'Ingeniero Frontend / Full Stack' },
        start: '2025-04',
        end: '2025-06',
        bullets: {
          en: [
            'Built responsive interfaces with React, Next.js and shadcn/ui.',
            'Integrated REST APIs and handled file upload flows with validation.',
            'Improved web performance, state management and integration with API-based backends.',
          ],
          es: [
            'Construí interfaces responsivas con React, Next.js y shadcn/ui.',
            'Integré APIs REST y manejé flujos de carga de archivos con validaciones.',
            'Mejoré el rendimiento web, el manejo de estado y la integración con backends basados en APIs.',
          ],
        },
      },
    ],
  },
];
