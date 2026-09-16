/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A192F',      // Deep Navy / Azul Profundo
          navy: '#0F2547',      // Rich Navy
          blue: '#1E40AF',      // Modern Blue
          lightBlue: '#3B82F6', // Accent Blue
          sky: '#60A5FA',       // Soft Sky
          neutral: '#F8FAFC',   // Clean White / Neutral
          slate: '#64748B',     // Text Slate
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
