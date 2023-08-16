/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        require('flowbite/plugin')
    ],
    content: ["./views/**/*.ejs", "./public/js/**/*.js", "./node_modules/flowbite/**/*.js"],
    theme: {
      container: {
          center: true,
          padding: {
              DEFAULT: '1rem',
              sm: '1rem',
              lg: '2rem',
              xl: '4rem',
              '2xl': '4rem',
          },

      },
      extend: {
          colors: {
              'nav-color': 'rgba(25, 24, 24, 1)',  
          },
          transitionDuration: {
              '0':'0ms',
          },
          width: {
              '6/25': '24%',
            },

          height: {
              '150': '40rem',
              '15' : '3.75rem',
            },

          screens:{
              '3xl':'1600px',
              '4xl':'1930px',
          },

          minWidth: {
              '1/10': '10%',
          },

          fontSize:{
              '10xl':' 10rem',
              '11xl':' 12rem',
              '12xl':' 14rem',
              '13xl':' 16rem',
          },

          maxWidth: {
              '1/6': '16,7%',
              '1/4': '25%',
              '1/2': '50%',
              '3/4': '75%',
              '10': '10rem',
              '15': '15rem',
              '20': '20rem',
          },
          fontWeight: {
              'semiextrabold': 750,
             },

          scale: {
              '102':'1.02',
          },

          borderWidth: {
              '0': '0',
              '2': '2px',
             '3': '3px',
              '4': '4px',
             '6': '6px',
             '8': '8px',
             '3rem':'3rem',
            },
      },
    },
    variants: {}
}