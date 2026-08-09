/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF7F2',
        cardBg: 'rgba(255, 255, 255, 0.85)',
        glassBorder: 'rgba(245, 130, 32, 0.15)',
        brandOrange: '#F58220',
        accentAmber: '#F97316',
        peachGlow: '#FED7AA',
        warmSlate: '#1C1917',
        warmMuted: '#57534E',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.75, transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      },
      boxShadow: {
        'glow-orange': '0 10px 30px -5px rgba(245, 130, 32, 0.3)',
        'glow-amber': '0 10px 30px -5px rgba(249, 115, 22, 0.25)',
        'warm-card': '0 10px 30px 0 rgba(0, 0, 0, 0.04), 0 1px 3px 0 rgba(0, 0, 0, 0.02)',
        'warm-hover': '0 20px 40px -15px rgba(245, 130, 32, 0.18)',
      }
    },
  },
  plugins: [],
}
