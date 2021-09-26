module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'],
  darkMode: 'media',
  plugins: [require('@tailwindcss/typography')]
};