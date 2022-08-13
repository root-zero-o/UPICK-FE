/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: { min: "280px", max: "480px" },
      desktop: { min: "768px" },
    },
    fontSize: {
      "2xl": "26px",
      xl: "22px",
      lg: "20px",
      md: "16px",
      sm: "12px",
      xs: "10px",
    },
    colors: {
      blue1: "#1576FB",
      blue2: "#00B7F0",
      blue3: "#D2EFFA",
      darkblue1: "#153075",
      darkblue2: "#224AAE",

      orange: "#F94A23",
      yellow1: "#F9B023",
      yellow2: "#FFC83A",

      coolgray1: "#F7FAFF",
      coolgray2: "#E2F0FB",
      coolgray3: "#B1C2D0",
      coolgray4: "#808E99",
      coolgray5: "#4C5D6B",

      black: "#000000",
      white: "#ffffff",
      error: "#F94A23",
      kakao: "#FFE600",
      naver: "#00BE35",
    },
    extend: {
      backgroundImage: {
        // welcome page linear gradient
        "welcome-p-one":
          "linear-gradient(239.24deg, #45DDFF 28.42%, #0041E8 105.96%);",
        "welcome-p-two":
          "linear-gradient(317.3deg, #1576FB 5.42%, #45F1DA 85.66%);",
        // sign page linear gradient
        "sign-p-one":
          "linear-gradient(201.89deg, #45FFBC 13.17%, #45DDFF 107.88%)",
        "sign-p-two":
          "linear-gradient(317.3deg, #1576FB 5.42%, #45F1DA 85.66%)",
        // home page linear gradient
        "home-p-one":
          "linear-gradient(180.37deg, #45FFBC -5.06%, #45DDFF 89.84%)",
        // search input linear gradient
        searchInput:
          "linear-gradient(180deg, rgba(243, 249, 247, 0.3) 0%, rgba(228, 230, 252, 0.3) 100%)",
        // home - popular pick card linear gradient
        "home-popularPick-card":
          "linear-gradient(1.47deg, #F7FAFF 46.89%, rgba(247, 250, 255, 0) 101.82%)",
      },

      boxShadow: {
        // sign page
        "sign-p-input": "0px 17px 23px -3px rgba(177, 194, 208, 0.4)",
        "home-p-category-btn":
          "-4px -4px 6px rgba(255, 255, 255, 0.5), 4px 4px 6px rgba(177, 194, 208, 0.4);",
        chatBlue: "0px -15px 0px 0px rgba(210, 239, 250, 1)",
        chatWhite: "0px -15px 0px 0px rgba(255, 255, 255, 1)",
      },
      fontFamily: {
        sans: ["Noto+Sans+KR", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
