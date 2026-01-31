export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'organic-almond': '#FFF8E1',
        'rose-gold': '#B76E79',
        'deep-charcoal': '#2F4F4F',
        'celestial-blue': '#87CEEB',
        'antique-gold': '#C5A059',
        'neon-pink': '#FF1493',
        'deep-orange': '#FF8C00',
      },
      fontFamily: {
        'cinzel': ['"Cinzel"', 'serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'vibes': ['"Great Vibes"', 'cursive'],
        'bubblegum': ['"Bubblegum Sans"', 'cursive'],
      },
      backgroundImage: {
        'sunset-gradient': 'linear-gradient(to bottom, #E0F7FA 0%, #FFF8E1 50%, #B76E79 100%)',
        'blue-hour': 'linear-gradient(to bottom, #B76E79 0%, #6A5ACD 50%, #191970 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
