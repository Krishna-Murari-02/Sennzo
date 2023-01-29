module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quick: ["Quicksand"],
        poppin: ["Poppins"],
        pacifico: ["Pacifico"],
      },
      boxShadow: {
        movdesc: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
        hoverMovdesc: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        "img-sh": "rgb(38, 57, 77) 0px 20px 30px -10px;",
      },
    },

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  darkMode: "class",
};
