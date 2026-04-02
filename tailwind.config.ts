import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Plus Jakarta Sans'],
        body: ['Inter'],
      }
    }
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
} satisfies Config