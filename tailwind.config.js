/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {},
    colors: {
      green: "#45FFBC",

      skyblue: "#00B6F0",
      blue: "#1576FB",
      navy: "#4A5A95",
      lightBlue: "#D2EFFA",

      lightGray: "#F7FAFF",
      gray: "#B1C3D0",
      darkGray: "#808E99",
      cyan: "#00B7F0",

      black: "#000000",
      white: "#ffffff",
    },
    fontFamily: {
      "sdg-b": ["SDG-B"],
      "sdg-eb": ["SDG-EB"],
      "sdg-h": ["SDG-H"],
      "sdg-l": ["SDG-L"],
      "sdg-m": ["SDG-M"],
      "bon-black": ["bon-black"],
      "bon-bold": ["bon-bold"],
      "bon-demiLight": ["bon-demiLight"],
      "bon-light": ["bon-light"],
      "bon-medium": ["bon-medium"],
      "bon-regular": ["bon-regular"],
      "bon-thin": ["bon-thin"],
    },
    extend: {
      backgroundImage: {
        // welcome page linear gradient
        "welcome-p-one":
          "linear-gradient(239.24deg, #45DDFF 28.42%, #0041E8 105.96%);",
        "welcome-p-two":
          "linear-gradient(317.3deg, #1576FB 5.42%, #45F1DA 85.66%);",
        "welcome-p-three":
          "linear-gradient(239.24deg, #45DDFF 28.42%, #0041E8 105.96%)",
        "welcome-p-four":
          "linear-gradient(239.24deg, #45DDFF 28.42%, #0041E8 105.96%)",

        // sign page linear gradient
        "sign-p-one":
          "linear-gradient(201.89deg, #45FFBC 13.17%, #45DDFF 107.88%)",
        "sign-p-two":
          "linear-gradient(317.3deg, #1576FB 5.42%, #45F1DA 85.66%)",
        "sign-p-three":
          "linear-gradient(317.3deg, #1576FB 5.42%, #45F1DA 85.66%)",
        // home page linear gradient
        "home-p-one":
          "linear-gradient(180.37deg, #45FFBC -5.06%, #45DDFF 89.84%)",
        // search input linear gradient
        searchInput:
          "linear-gradient(180deg, rgba(243, 249, 247, 0.3) 0%, rgba(228, 230, 252, 0.3) 100%)",
      },

      boxShadow: {
        // sign page
        "sign-p-input": "0px 17px 23px -3px rgba(177, 194, 208, 0.4)",
        "home-p-category-btn":
          "-4px -4px 6px rgba(255, 255, 255, 0.5), 4px 4px 6px rgba(177, 194, 208, 0.4);",
      },
    },
  },
  plugins: [],
};
