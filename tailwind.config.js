export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#1e40af",
        dark: "#1e293b",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'dot-pattern': "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
      },
      backgroundSize: {
        'dot-grid': "20px 20px",
      }
    },
  },
  plugins: [],
}