/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter' 
      },
      textColor: {
        'primary': '#6B7280',
        'secondary': '#10B981'
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
