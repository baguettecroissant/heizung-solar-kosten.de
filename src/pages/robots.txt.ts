import type { APIRoute } from 'astro';
import { siteConfig } from '../../site.config';

export const GET: APIRoute = () => {
  const content = `User-agent: *
Allow: /

Sitemap: https://${siteConfig.domain}/sitemap-index.xml
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
