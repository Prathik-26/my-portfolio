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
  theme: {
    colors: {
      primary: "#0a192f",
      secondary: "#112240",
      accent: "#64ffda",
      text: "#8892b0",
      textLight: "#ccd6f6",
    },
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
  safelist: ["animate-fade-in"],
});
