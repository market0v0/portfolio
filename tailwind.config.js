/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        'sans-typewriter': ['Lucida Sans Typewriter', 'sans-serif']
      },
      colors: {
        primary: '#7E31F1',
        secondary: '#E5F5F3',
        bgcolor: '#0e021f96' // Change this to your desired color
      }
    }
  },
  plugins: []
}
