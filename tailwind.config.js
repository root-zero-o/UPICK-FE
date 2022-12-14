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
      "2xl": "22px",
      xl: "20px",
      lg: "18px",
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
      green: "#45FFBC",

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
      cyan: "rgba(0, 195, 240, 1)",
    },
    extend: {
      backgroundImage: {
        "gradient-one":
          "linear-gradient(239.24deg, #45DDFF 28.42%, #0041E8 105.96%);",
        "gradient-two":
          "linear-gradient(201.89deg, #45FFBC 13.17%, #45DDFF 107.88%)",
        "gradient-three":
          "linear-gradient(317.3deg, #1576FB 5.42%, #45F1DA 85.66%)",
        "gradient-four":
          "linear-gradient(180.37deg, #45FFBC -5.06%, #45DDFF 89.84%)",
        "gradient-five":
          "linear-gradient(350.37deg, #45DDFF -5.06%, #45FFBC 85.84%)",
        // search input linear gradient
        searchInput:
          "linear-gradient(180deg, rgba(243, 249, 247, 0.3) 0%, rgba(228, 230, 252, 0.3) 100%)",
        // home - popular pick card linear gradient
        "home-popularPick-card":
          "linear-gradient(1.47deg, #F7FAFF 46.89%, rgba(247, 250, 255, 0) 101.82%)",
        // map header linear-gradient
        "map-header":
          "linear-gradient(180deg, #F7FAFF 5%, rgba(247, 250, 255, 0) 35%)",
        "arrow-gradient":
          "radial-gradient(127.2% 48.97% at 42.91% -10.91%, rgba(69, 255, 188, 0.8) 0%, rgba(69, 255, 188, 0) 100%), radial-gradient(70% 169.82% at 3.82% 96.36%, #1576FB 0%, rgba(21, 118, 251, 0) 100%), radial-gradient(70.39% 180.39% at 59.3% -8.88%, rgba(108, 222, 157, 0) 38.42%, #90EED3 100%), radial-gradient(71.41% 74.93% at 44.96% 37.14%, #6DC9FF 0%, #62C0F9 30.88%, #3FA8E8 67.62%, #4CB9ED 89.18%, #65D7F7 100%)",
        "arrow-bg-gradient":
          "linear-gradient(240.04deg, #F7FAFF 8.81%, #ECFAFF 88.28%)",
        "welcome-one":
          "linear-gradient(239.24deg, #45DDFF 28.42%, #0041E8 105.96%);",
      },

      boxShadow: {
        // sign page
        "sign-p-input": "0px 17px 23px -3px rgba(177, 194, 208, 0.4)",
        "home-p-category-btn":
          "-4px -4px 6px rgba(255, 255, 255, 0.5), 4px 4px 6px rgba(177, 194, 208, 0.4);",
        chatBlue: "0px -15px 0px 0px rgba(210, 239, 250, 1)",
        chatWhite: "0px -15px 0px 0px rgba(255, 255, 255, 1)",
        "map-header": "0px -8px 10px 0px rgba(177, 194, 208, 0.4)",
        alert: "0px 17px 23px -3px rgba(177, 194, 208, 0.4)",
        arrow_shadow:
          "0px 17.5531px 20.3514px rgba(0, 44, 170, 0.0361111), 0px 11.377px 11.9188px rgba(0, 44, 170, 0.0588889), 0px 6.7612px 6.48231px rgba(0, 44, 170, 0.075), 0px 3.51062px 3.30711px rgba(0, 44, 170, 0.0911111), 0px 1.43025px 1.65826px rgba(0, 44, 170, 0.113889), 0px 0.325058px 0.800866px rgba(0, 44, 170, 0.15)",
        arrow_bg_shadow: "-10px 4px 10px rgba(0, 0, 0, 0.04)",
        pick_up_shadow: "0 -30px 20px #F7FAFF",
      },
      button_shadow: "0px -3px 4px #B1C2D0",
      fontFamily: {
        sans: ["Noto+Sans+KR", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
