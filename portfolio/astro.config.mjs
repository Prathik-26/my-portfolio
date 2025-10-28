import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import UnoCSS from "unocss/astro";

export default defineConfig({
  site: "https://prathik-26.github.io",
  base: "/https://github.com/Prathik-26/my-portfolio",
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    solid(),
  ],
});
