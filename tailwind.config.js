/** @type {import('tailwindcss').Config} */

module.exports = {
  "content": [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
      "extend": {
          "colors": {
              "gray": {
                  "100": "#949494",
                  "400": "rgba(255, 255, 255, 0.5)",
                  "500": "rgba(255, 255, 255, 0.6)",
                  "600": "rgba(255, 255, 255, 0.8)",
                  "700": "rgba(255, 255, 255, 0.13)",
                  "800": "rgba(255, 255, 255, 0.9)"
              },
              purple: {
                "200": "#0f081e",
                "300": "#0c0617",
              },
              "whitesmoke": "rgba(237, 237, 237, 0.8)",
              "gainsboro": "rgba(217, 217, 217, 0.1)"
          },
          "fontFamily": {
              "clash-display": ["Clash Display", "sans-serif"],
              "poppins": ["Poppins", "sans-serif"]
          },
          
      }
  },
  "corePlugins": {
      "preflight": false
  }
}