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
  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap(),
    robotsTxt(),
    mdx(),
    partytown({}),
    react(),
  ],
});