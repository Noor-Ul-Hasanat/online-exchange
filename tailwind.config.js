/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        'custom-width': 'calc(100% - 16rem);',
        'perc-width':'80%'
      },
      screens:{
        'xs' : '900px',
        'xxs' : '420px',
        'xxxs': '350px'
      }
    },
  },
  plugins: [],
}


