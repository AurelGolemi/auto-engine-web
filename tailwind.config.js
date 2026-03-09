// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        exo2: ["var(--font-exo2)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        black: "#000000",
        carbon: "#1a1a1a",
        "carbon-light": "#2d2d2d",
        "carbon-dark": "#0d0d0d",
        "race-red": "#e60000",
        "race-red-dark": "#cc0000",
        "race-red-glow": "#ff1a1a",
      },
      boxShadow: {
        "red-glow": "0 0 20px rgba(230, 0, 0, 0.5)",
        "red-glow-lg": "0 0 30px rgba(230, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
