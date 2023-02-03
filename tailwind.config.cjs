module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        gray: { normal: "#b4b4b4" },
        primary: "#BE0BF7",
        secondary: "#f788aee6",
        light: "#f8f9fa",
        muted: "#6c757d",
        dark: "#030304",
      },
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        garnet: ["garnett", "Poppins"],
        GarnettLight: ["garnett-ligth", "Poppins"],
        GarnettMedium: ["garnett-medium", "Poppins"],
        PublicSansRegular: ["PublicSans Regular", "Poppins"],
        PublicSansBlack: ["PublicSans Black", "Poppins"],
        PublicSansBoldItalic: ["PublicSansboldItalic", "Poppins"],
        PublicSansMedium: ["PublicSansMedium", "Poppins"],
        PublicSansLight: ["PublicSanslight", "Poppins"],
      },
    },
  },

  variants: {},
  plugins: [],
};
