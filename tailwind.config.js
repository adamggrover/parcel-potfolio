/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '0.003rem',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      fontFamily: {
        clean: ['Source Sans 3', 'sans-serif'],
        body: ['Source Code Pro', 'monospace']
      },
      colors: {
        primary: '#16126e'
      }
    },
  },
  plugins: [],
}

