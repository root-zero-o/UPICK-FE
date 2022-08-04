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
      gradientBlue: "#45DDFF",
      gradientGreen: "#45F1DA",
      green: "#45FFBC",

      skyblue: "#00B6F0",
      blue: "#1576FB",
      navy: "#4A5A95",
      lightBlue: "#D2EFFA",

      lightGray: "#F7FAFF",
      gray: "#B1C3D0",
      darkGray: "#808E99",
      gradientGray: "#E4E6FC",

      black: "#000000",
      white: "#FFFFFF",
      borderWhite: "#E4E5E6",
      gradientWhite: "#F3F9F7",
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
      boxShadow: {
        whiteLeft: "-10px 30px 0px rgba(247, 250, 255, 1)",
        whiteRight: "10px 30px 0px rgba(247, 250, 255, 1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
