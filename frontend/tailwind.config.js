/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      textColor: {
        'secondary': '#6B7280'
      },
      colors: {
        gray: {
          200: '#F9FAFB'
        },
        lilac: {
          600: '#1F2937',
          800: '#111827'
        },
        purple: {
          600: '#5048E5'
        },
      }
    },
  },
  plugins: [],
}
