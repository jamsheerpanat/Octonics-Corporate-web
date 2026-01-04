import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://octonics.com",
  output: "static", // ✅ built-in static output
  redirects: {
    '/products/octoflow': '/products/octovyre',
    '/ar/products/octoflow': '/ar/products/octovyre',
  },
  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap({
      // Enhanced sitemap with priority pages
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-KW',
          ar: 'ar-KW',
        },
      },
    }),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/api/', '/_astro/'],
        },
        {
          userAgent: 'Googlebot',
          allow: '/',
          crawlDelay: 1,
        },
        {
          userAgent: 'Bingbot',
          allow: '/',
          crawlDelay: 1,
        },
      ],
      sitemap: true,
    }),
    mdx(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    react(),
  ],
});