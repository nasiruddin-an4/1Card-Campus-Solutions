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
      },
      animation: {
        'marquee-left': 'marquee-left 25s linear infinite',
        'marquee-right': 'marquee-right 25s linear infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}