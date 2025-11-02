/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a4c2e',
        accent: '#e6b800',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
