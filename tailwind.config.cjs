module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0071EB",
        light: "#f8f9fa",
        muted: "#6c757d",
      },
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        GarnettLight: ["garnett-ligth", "Poppins"],
        GarnettMedium: ["garnett-medium", "Poppins"],
        PublicSansRegular: ["PublicSans Regular", "Poppins"],
      },
    },
  },

  variants: {},
  plugins: [],
};
