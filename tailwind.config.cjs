/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          'azul-trasval': '#00438E',
          'cielo-trasval': '#007DB8',
        },
      },
    },
    plugins: [],
  }