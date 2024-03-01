/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens: {
      'min2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }

      'minxl': {'min': '1280px'},
      // => @media (min-width: 1280px) { ... }

      'minlg': {'min': '1080px'},
      // => @media (min-width: 1080px) { ... }

      'minmd': {'min': '768px'},
      // => @media (min-width: 768px) { ... }

      'minsm': {'min': '640px'},
      // => @media (min-width: 640px) { ... }
      'minxs': {'min': '465px'},
      // => @media (min-width: 465px) { ... }

      'max2xl': {'max': '1536px'},
      // => @media (max-width: 1536px) { ... }

      'maxxl': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }

      'maxlg': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }

      'maxmd': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'maxsm': {'max': '640px'},
      // => @media (max-width: 640px) { ... }

      'max501': {'max': '501px'},
      // => @media (max-width: 501px) { ... }

      'maxls': {'max': '465px'},
      // => @media (max-width: 465px) { ... }'max': }

      'max400': {'max': '400px'},
      // => @media (max-width: 400px) { ... }

      'maxxs': {'max': '368px'},
      // => @media (max-width: 368px) { ... }

      'maxxxs': {'max': '279px'},
      // => @media (max-width: 279px) { ... }
    }
  },
  plugins: [],
}