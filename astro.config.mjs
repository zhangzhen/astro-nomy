import db from "@astrojs/db";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import simpleStackForm from "simple-stack-form";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://foodie.sunneyxielab.org",
  integrations: [mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark-dimmed"
    },
    gfm: true
  }), icon(), sitemap(), react(), tailwind({
    applyBaseStyles: false
  }), db(), simpleStackForm()],
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  }),
  vite: {
    optimizeDeps: {
      exclude: ["astro:db"]
    }
  }
});
