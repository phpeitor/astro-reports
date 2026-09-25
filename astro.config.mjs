import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'PHPeitor Docs',
      description: 'Documentacion del dataset PHPeitor',
      favicon: '/favicon.svg',
      logo: { src: './src/content/docs/phpeitor-docs.svg', alt: 'Docs PHPeitor', replacesTitle: true },
      customCss: ['./src/styles/starlight.css'],
      components: {
        Footer: './src/components/DocsFooter.astro',
        PageSidebar: './src/components/PartnersSidebar.astro'
      },
      defaultLocale: 'root',
      locales: {
        root: { label: 'Español', lang: 'es' }
      },
      sidebar: [
        {
          label: 'PHPeitor',
          items: [{ label: 'RENIEC', link: '/docs/#resumen' }]
        }
      ]
    })
  ],
  server: {
    host: true
  }
});
