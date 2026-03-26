import {
  defineConfig,
  presetWind3,
  presetTypography,
  presetIcons,
} from "unocss";

export default defineConfig({
  presets: [
    presetWind3(),
    presetTypography(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
  rules: [
    // Theme-aware background colors (use CSS variables so dark/light theme swap works)
    ["bg-primary", { "background-color": "rgba(var(--c-primary), var(--un-bg-opacity, 1))" }],
    ["bg-secondary", { "background-color": "rgba(var(--c-secondary), var(--un-bg-opacity, 1))" }],
    ["bg-accent", { "background-color": "rgba(var(--c-accent), var(--un-bg-opacity, 1))" }],
    [/^bg-accent\/(\d+)$/, ([, o]) => ({ "background-color": `rgba(var(--c-accent), ${parseInt(o!) / 100})` })],

    // Theme-aware text colors
    ["text-text", { "color": "rgba(var(--c-text), var(--un-text-opacity, 1))" }],
    ["text-textLight", { "color": "rgba(var(--c-textLight), var(--un-text-opacity, 1))" }],
    ["text-accent", { "color": "rgba(var(--c-accent), var(--un-text-opacity, 1))" }],
    ["text-primary", { "color": "rgba(var(--c-primary), var(--un-text-opacity, 1))" }],

    // Theme-aware border colors
    ["border-accent", { "border-color": "rgba(var(--c-accent), var(--un-border-opacity, 1))" }],
    [/^border-accent\/(\d+)$/, ([, o]) => ({ "border-color": `rgba(var(--c-accent), ${parseInt(o!) / 100})` })],

    // Theme-aware gradient stops
    [/^from-accent\/(\d+)$/, ([, o]) => ({
      "--un-gradient-from": `rgba(var(--c-accent), ${parseInt(o!) / 100})`,
      "--un-gradient-to": `rgba(var(--c-accent), 0)`,
    })],
    [/^to-accent\/(\d+)$/, ([, o]) => ({
      "--un-gradient-to": `rgba(var(--c-accent), ${parseInt(o!) / 100})`,
    })],

    // Theme-aware shadow color
    [/^shadow-accent\/(\d+)$/, ([, o]) => ({
      "--un-shadow-color": `rgba(var(--c-accent), ${parseInt(o!) / 100})`,
    })],
  ],
  theme: {
    animation: {
      keyframes: {
        "fade-in":
          "{from {opacity: 0; transform: translateY(10px)} to {opacity: 1; transform: translateY(0)}}",
      },
      durations: {
        "fade-in": "0.6s",
      },
      timingFns: {
        "fade-in": "ease-out",
      },
    },
  },
  shortcuts: {
    "animate-fade-in": "animate-[fade-in_0.5s_ease-in-out]",
    "tech-tile": "relative overflow-visible",
  },
  safelist: ["animate-fade-in", "i-mdi-weather-sunny", "i-mdi-weather-night"],
});
