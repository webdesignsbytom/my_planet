/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'ocean-animation': 'oceanColourChange 30s infinite', // 5s is the duration, adjust as needed
      },
      backgroundImage: {
        'green-bg': "url('../assets/img/myea/green-bg1.png')",
      },
      boxShadow: {
        'internal-main': 'inset -1px 43px 35px 48px #00000024',
        'white-complex': `
        rgba(255, 255, 255, 0.25) 0px 54px 55px, 
        rgba(255, 255, 255, 0.12) 0px -12px 30px, 
        rgba(255, 255, 255, 0.12) 0px 4px 6px, 
        rgba(255, 255, 255, 0.17) 0px 12px 13px, 
        rgba(255, 255, 255, 0.09) 0px -3px 5px
      `,
      },
      colors: {
        'main-colour': '#4AAD37',
        'nav-colour': '#dcbc90',
        'alt-colour': '#dcbc90',
        'footer-colour': '#1F2937',
        'colour-pale': '#99DF8A',
        'colour-light': '#6DC85A',
        'colour-med': '#32931D',
        'colour-dark': '#1A7408',
        'transparent-black': 'rgba(0, 0, 0, 0.85)',
        'transparent-white': 'rgba(255, 255, 255, 0.65)',
        'main-text': '#000000',
        'dark-text': '#FFFFFF',
        'alt-text': '#000000',
        'dark-alt-text': '#FFFFFF',
        'hover-text': '#94A3B8',
        'dark-hover-text': '#94A3B8',
        'active-text': '#6B7280',
        'dark-active-text': '#6B7280',
        'placeholder-text': 'rgb(55 65 81)',
        'dark-placeholder-text': 'rgb(55 65 81)',
        'main-border': '#000000',
        'dark-border': '#FFFFFF',
        'error-red': '#',
        'success-green': '#',
        'hyperlink-blue': '#2563EB',
        selected: '#2563EB',
        'dark-selected': '#2563EB',
      },
      width: {
        eighty: '80%',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        travel: ['TravelFont', 'sans-serif'],
      },
      gridTemplateRows: {
        reg: 'auto 1fr',
        rev: '1fr auto',
        a1a: 'auto 1fr auto',
      },
      gridTemplateColumns: {
        reg: 'auto 1fr',
        rev: '1fr auto',
        a1a: 'auto 1fr auto',
      },
    },
  },
  plugins: [],
};
