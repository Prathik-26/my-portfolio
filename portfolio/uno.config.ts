import { defineConfig, presetWind3, presetTypography, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(), 
    presetTypography(), 
  ],
  theme: {
    colors: {
      primary: '#0a192f',
      secondary: '#112240',
      accent: '#64ffda',
      text: '#8892b0',
      textLight: '#ccd6f6',
    }
  }
})
