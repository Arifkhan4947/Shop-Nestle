/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
          '100%': { 'border-color': 'black' },
        },
      },
      animation: {
        typing: 'typing 4s steps(50) forwards, blink 1s infinite',
      },
    },
  },
  plugins: [],
}