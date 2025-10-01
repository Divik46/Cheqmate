/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#080808',
        secondary: '#efedfdb3',
        accent: '#007aff',
        muted: {
          DEFAULT: '#efedfdb3',
          foreground: '#efedfdb3',
        },
        foreground: '#ffffff',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Rubik', 'system-ui', 'sans-serif'],
      },
      animation: {
        'hue-rotate': 'hue-rotate 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'hue-rotate': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        'float': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(30px, -20px) rotate(90deg)' },
          '50%': { transform: 'translate(-20px, 30px) rotate(180deg)' },
          '75%': { transform: 'translate(20px, -30px) rotate(270deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

