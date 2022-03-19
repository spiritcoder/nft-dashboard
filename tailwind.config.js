module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Hanuman: [
          'Hanuman', 'serif'
        ],
        Montserrat:[
          'Montserrat', 'sans-serif'
        ],
        Beyno:[
          'Beyno'
        ],
        OpenSans:[
          'Open Sans', 'sans-serif'
        ],
        Roboto:[
          'Roboto', 'sans-serif'
        ]
      },
      colors:{
        'wakanda-gray': '#24252D',
        'wakanda-card-gray':'#393B4C',
        'wakanda-yellow':'#EE8C1F',
        'wakanda-dark':'#1D1D1D',
        'admin-blue': '#0051aa'
      },
      fontSize: {
        'list-title': '14px',
        'list-text': '12px'
      }
    },
  },
}
