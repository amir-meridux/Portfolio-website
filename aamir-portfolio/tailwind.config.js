/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        primary: '#0F172A',
        blue: { DEFAULT: '#2563EB' },
        sky: { DEFAULT: '#38BDF8' },
        green: { DEFAULT: '#10B981' },
        orange: { DEFAULT: '#F59E0B' }
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
    },
  },
  plugins: [],
}
