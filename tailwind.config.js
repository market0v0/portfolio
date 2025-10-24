/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'liquid-gradient': 'linear-gradient(135deg, rgba(126, 49, 241, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)'
      },
      fontFamily: {
        'sans-typewriter': ['Lucida Sans Typewriter', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#7E31F1',
          light: '#A855F7',
          dark: '#6D28D9'
        },
        // Dark mode colors
        dark: {
          bg: '#0A0A0F',
          card: '#12121A',
          border: '#1F1F2E',
          text: '#E5E7EB',
          'text-secondary': '#9CA3AF'
        },
        // Light mode colors
        light: {
          bg: '#FFFFFF',
          card: '#F9FAFB',
          border: '#E5E7EB',
          text: '#111827',
          'text-secondary': '#6B7280'
        },
        glass: {
          border: 'rgba(255, 255, 255, 0.1)',
          bg: 'rgba(255, 255, 255, 0.05)'
        }
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px'
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(126, 49, 241, 0.1)',
        'glass-lg': '0 20px 60px 0 rgba(126, 49, 241, 0.15)',
        'glow': '0 0 20px rgba(126, 49, 241, 0.3)',
        'glow-lg': '0 0 40px rgba(126, 49, 241, 0.4)'
      }
    }
  },
  plugins: []
}
