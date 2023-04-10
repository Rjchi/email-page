/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // Con esto extendemos lo que queramos, en este caso vamos a extender un color que copiamos de otra pagina
    extend: {
      colors: {
        verde: "#16c60c",
      },
    },
    // Con esto creamos nuestro propio boxShadow
    boxShadow: {
      navbar:
        "0px 10px 8px 0px rgba(3, 3, 4, 0.03), 0 1px 2px -1px rgba(3, 3, 4, 0.03)",
      "2xl": "0 0px 40px 0px rgba(0, 0, 0, 0.1)",
    },
    // Esto es para modificar (las mediaquery) los tamaños para que sea responsive
    screens: {
      // 'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      // 'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      // 'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }


      sm: "640px", // sm empieza de 767 para abajo

      md: "768px", // md empieza de 1089 para abajo

      lg: "1103px", // lg empieza de 1279 para abajo

      xl: "1280px", // ...

      // Nota: podemos agregar las que queramos ejemplo:
      "2xl": "1536px",

      "3xl": "1720px",

      "4xl": "1856px",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
