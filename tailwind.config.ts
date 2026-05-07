import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C88E2A',
        secondary: '#FAF1E8'
      },
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Rochester', 'cursive']
      }
    }
  }
} satisfies Partial<Config>
