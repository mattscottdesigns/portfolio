const plugin = require("tailwindcss/plugin")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: true,
    layers: ["components", "utilities"],
    content: ["./src/**/*.js"],
  },
  theme: {
    fontFamily: {
      sans: ["Roboto", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#98C08A",
        secondary: "#4DD8D0",
        dark: "#32475A",
        medium: "#939C99",
        light: "#F2F3EF",
      },
      backgroundImage: theme => ({
        about: "url('../images/background.jpg')",
      }),
      backgroundOpacity: {
        90: "0.9",
      },
      opacity: {
        90: "0.9",
      },
      transitionProperty: {
        height: "height",
      },
      inset: {
        full: "100%",
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities, theme, config }) {
      const themeColors = theme("colors")
      const individualBorderColors = Object.keys(themeColors).map(
        colorName => ({
          [`.border-b-${colorName}`]: {
            borderBottomColor: themeColors[colorName],
          },
          [`.border-t-${colorName}`]: {
            borderTopColor: themeColors[colorName],
          },
          [`.border-l-${colorName}`]: {
            borderLeftColor: themeColors[colorName],
          },
          [`.border-r-${colorName}`]: {
            borderRightColor: themeColors[colorName],
          },
        })
      )

      addUtilities(individualBorderColors)
    }),
  ],
}
