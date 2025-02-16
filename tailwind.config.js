/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,scss}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        primary: '#4f46e5',
        secondary: '#818cf8',
      },
    },
  },
  darkMode: 'media',
  plugins: [],
}