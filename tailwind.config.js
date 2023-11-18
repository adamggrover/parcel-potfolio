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
    extend: {},
  },
  plugins: [],
}

