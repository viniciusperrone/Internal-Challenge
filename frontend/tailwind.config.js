/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    screens: {
      'mobile': '360px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
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
    keyframes: {
      appearFromLeft: {
        'from': { transform: 'translateX(-280px)' },
        'to': { transform: 'translateX(0)' }
      }
    }
  },
  plugins: [],
}
