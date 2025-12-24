/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        abyssal: {
          900: '#050a14',
          800: '#0a1428',
          700: '#0f1e3c',
        },
        'fossil-white': '#f0f4f8',
        'wisteria-purple': '#a98db8',
        'river-emerald': '#2d8a7c',
        'stratum-amber': '#d99e55',
      },
      animation: {
        'float': 'floating 6s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}

