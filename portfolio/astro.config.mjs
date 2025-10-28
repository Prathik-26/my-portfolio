import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import UnoCSS from "unocss/astro";

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    solid(),
  ],
});
