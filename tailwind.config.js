/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DMSans', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        // primary color yellow 400. Defined in app.config.js since the NUXT UI is being used
        yellow: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#f8b822',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#5c3411',
        },
        mineGray: '#222222',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.5'),
          paddingRight: theme('spacing.5'),
          maxWidth: '1240px',
        },
      });
    },
  ],
};
