/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serifs', 'arial'],
        antonio: ['"Antonio"', 'sans-serifs', 'arial']
      },
      colors: {
        "rgb237": "rgb(237 237 237)",
        'primary': '#302972',
        '333': '#333',
      },
      boxShadow: {
        's0': 'rgba(0, 0, 0, 0.16) 0px 1px 4px 0px;',
      },
      backgroundImage: {
        'mainBanner': "url('./assets/img/banner-1.png')"
      },
      fontSize: {
        '10': '1rem',
        '13': '1.3rem',
        '14': '1.4rem',
        '16': '1.6rem',
        '18': '1.8rem',
        '20': '2rem',
        '22': '2.2rem',
        '24': '2.4rem',
        '26': '2.6rem',
        '28': '2.8rem',
        '30': '3rem'
      },
      transitionProperty: {
        'visibility': 'visibility',
        'opacity': 'opacity'
      }
    },
  },
  plugins: [],
}