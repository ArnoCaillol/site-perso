/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dracula]"],
          primary: "#03A688",
          secondary: "#27418C"
        },
      },
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=corporate]"],
          primary: "#03A688",
          'primary-content': "white",
          secondary: "#27418C",
          'secondary-content': "white",
        },
      },
    ],
    },
  }
  
  