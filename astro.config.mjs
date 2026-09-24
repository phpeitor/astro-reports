import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'PHPeitor Docs',
      description: 'Documentacion del dataset PHPeitor',
      logo: { src: './src/content/docs/phpeitor-docs.svg', alt: 'Docs PHPeitor', replacesTitle: true },
      customCss: ['./src/styles/starlight.css'],
      defaultLocale: 'root',
      locales: {
        root: { label: 'Español', lang: 'es' }
      },
      sidebar: [
        {
          label: 'PHPeitor',
          items: [{ label: 'RENIEC', link: '/docs/' }]
        }
      ]
    })
  ],
  server: {
    host: true
  }
});
