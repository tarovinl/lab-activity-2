/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite',
        marquee3: 'marquee3 20s linear infinite',
        marquee4: 'marquee4 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee3: {
          '0%': { transform: 'translateX(%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee4: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(%)' },
        },
      },
    },
  },
  plugins: [],
  
}

