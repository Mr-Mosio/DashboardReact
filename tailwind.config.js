/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes.js';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  safelist: [
    "test"
  ],
  theme: {
    extend: {
      fontFamily: {
        yekanBakh : "YekanBakh",
        tahoma : "tahoma",
        roboto: "Roboto"
      },


      colors: {

        // add focus color
        "primary-focus": "color-mix(in oklab, oklch(var(--p) / var(--tw-bg-opacity, 1)) 90%, black)",
        "secondary-focus": "color-mix(in oklab, oklch(var(--s) / var(--tw-bg-opacity, 1)) 90%, black)",
        "accent-focus": "color-mix(in oklab, oklch(var(--a) / var(--tw-bg-opacity, 1)) 90%, black)"



      }
    },
  },
  daisyui: {
    themes: [
        // THEME LIGHT
      {
        light: {
          ...themes["light"],
          primary: "#24a538",
          "primary-content": themes["light"]["base-100"],
          secondary: "#009ed4",
          "secondary-content": themes["light"]["base-100"],
        },
      },
      // THEME DARK
      {
        dark: {
          ...themes["dark"],
          primary: "#24a538",
          "primary-content": themes["dark"]["base-100"],
          secondary: "#009ed4",
          "secondary-content": themes["dark"]["base-100"],
        },
      },
    ],
  },
  plugins: [
    daisyui,
  ],
}

