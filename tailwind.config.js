module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#036',
          light: '#005591',
          lighter: '#2980b9',
          lightest: '#dcebf4',
        },
        secondary: {
          DEFAULT: '#faaf05',
          dark: '#eba405',
          light: '#fef5e1',
        },
        gray: {
          DEFAULT: '#a8a8a8',
          dark: '#3c3c3c',
          light: '#e9e9e9',
          lighter: '#f2f2f2',
          lightest: '#fafafa',
        },
        white: {
          DEFAULT: '#ffffff',
          'opacity-1': 'rgba(255, 255, 255, 0.92)',
          'opacity-2': 'rgba(255, 255, 255, 0.92)',
          'opacity-3': 'rgba(255, 255, 255, 0.56)',
          'opacity-4': 'rgba(255, 255, 255, 0.24)',
          'opacity-5': 'rgba(255, 255, 255, 0.12)',
        },
        black: {
          DEFAULT: '#000000',
          'opacity-1': 'rgba(0, 0, 0, 0.88)',
          'opacity-2': 'rgba(0, 0, 0, 0.72)',
          'opacity-3': 'rgba(0, 0, 0, 0.56)',
          'opacity-4': 'rgba(0, 0, 0, 0.32)',
          'opacity-5': 'rgba(0, 0, 0, 0.12)',
        },
        border: {
          DEFAULT: '#ecf0f1',
          select: '#b7b7b7',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
      },
      container: {
        DEFAULT: '1500px',
        wide: '1300px',
        desktop: '1024px',
        tablet: '768px',
        mobile: '320px',
      },
    },
  },
  plugins: [],
};
