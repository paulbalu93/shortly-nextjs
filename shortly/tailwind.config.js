module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "shorten-desktop": "url('/bg-shorten-desktop.svg')",
        "boost-desktop": "url('/bg-boost-desktop.svg')",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        shortly_cyan: {
          light: "#232F3E",
          DEFAULT: "#2acfcf",
        },
        dark_violet: {
          light: "#3A3053",
          DEFAULT: "#3b3054",
        },
        shortly_red: {
          light: "#232F3E",
          DEFAULT: "#f46262",
        },
        shortly_gray: {
          light: "#232F3E",
          DEFAULT: "#bfbfbf",
        },
        shortly_grayish_violet: {
          light: "#232F3E",
          DEFAULT: "#9e9aa7",
        },
        very_dark_blue: {
          light: "#232F3E",
          DEFAULT: "#35323e",
        },
        very_dark_violet: {
          light: "#232F3E",
          DEFAULT: "#232127",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
