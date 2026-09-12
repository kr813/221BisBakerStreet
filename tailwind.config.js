/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        victorian: {
          dark: "#0b0c10",
          paper: "#f7f4ea",
          card: "#14171d",
          accent: "#c99a4e", // Brass Gold
          accentHover: "#e5b362",
          crimson: "#721c24", // Burgundy / Crimson
          deepBlue: "#1a233a",
          border: "#2d3446",
          subtle: "#8e99ac",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'fog-pattern': "radial-gradient(circle at 50% 50%, rgba(201, 154, 78, 0.05) 0%, transparent 60%)",
        'gold-gradient': "linear-gradient(135deg, #c99a4e 0%, #f3d489 50%, #9e752f 100%)",
      }
    },
  },
  plugins: [],
}
