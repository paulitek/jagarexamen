import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0d1a0d',
          900: '#132213',
          800: '#1a2e1a',
          700: '#243d24',
          600: '#2d4d2d',
          500: '#3a6b3a',
          400: '#4e8a4e',
          300: '#6aaa6a',
        },
        bark: {
          900: '#2a1a08',
          800: '#3d2810',
          700: '#5c3d18',
          600: '#7a5220',
          500: '#9a6b2a',
          400: '#b8843a',
          300: '#d4a055',
          200: '#e8c080',
          100: '#f5e0b0',
        },
        cream: {
          100: '#fdf6e8',
          200: '#f5e8cc',
          300: '#e8d4a8',
        },
        mist: {
          900: '#1a2020',
          800: '#253030',
          700: '#304040',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      backgroundImage: {
        'forest-gradient': 'linear-gradient(135deg, #0d1a0d 0%, #1a2e1a 50%, #243d24 100%)',
        'bark-gradient': 'linear-gradient(135deg, #3d2810 0%, #5c3d18 100%)',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234e8a4e' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'forest': '0 4px 24px rgba(13, 26, 13, 0.6)',
        'bark': '0 4px 16px rgba(58, 40, 16, 0.4)',
        'glow': '0 0 20px rgba(78, 138, 78, 0.25)',
      },
    },
  },
  plugins: [],
}

export default config
