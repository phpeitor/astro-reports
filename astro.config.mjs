import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'PHPeitor Docs',
      description: 'Documentacion del dataset PHPeitor',
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
