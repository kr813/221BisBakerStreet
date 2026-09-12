/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: "#000000",
          card: "#1c1c1e",
          cardHover: "#2c2c2e",
          subcard: "#2c2c2e",
          border: "rgba(255, 255, 255, 0.12)",
          text: "#f5f5f7",
          subtext: "#86868b",
          gold: "#d4af37",
          goldMuted: "#a3842c",
          blue: "#007aff",
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Inter"',
          'sans-serif',
        ],
        serif: [
          '"Playfair Display"',
          'Georgia',
          'serif',
        ]
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
}
