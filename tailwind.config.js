/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      colors: {
        teal: {
          DEFAULT: '#3B8C7D',
          50: '#EDF5F3',
          100: '#D4E8E4',
          200: '#A9D1C9',
          300: '#7EBAAE',
          400: '#53A393',
          500: '#3B8C7D',
          600: '#2F7064',
          700: '#23544B',
          800: '#183832',
          900: '#0C1C19',
        },
        navy: {
          DEFAULT: '#1E3A5F',
          50: '#E8EDF3',
          100: '#C5D1E1',
          200: '#8BA3C3',
          300: '#5175A5',
          400: '#2F5182',
          500: '#1E3A5F',
          600: '#182E4C',
          700: '#122339',
          800: '#0C1726',
          900: '#060C13',
        },
        'off-white': '#F4F4F4',
      },
      letterSpacing: {
        'headline': '-0.025em',
        'overline': '0.125em',
      },
    },
  },
  plugins: [],
};
