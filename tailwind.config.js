/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        khaki: "#ffde7c",
        whitesmoke: {
          "100": "#f0f1f2",
          "200": "#eee",
        },
        aliceblue: "#f5fcfe",
        deepskyblue: "#31c0f0",
        gray: {
          "100": "#202226",
          "200": "#0c172f",
          "300": "rgba(255, 255, 255, 0.2)",
        },
        darkslategray: "#45474d",
        steelblue: {
          "100": "#008cbd",
          "200": "rgba(0, 140, 189, 0.09)",
        },
        white: "#fff",
        darkgray: "#999",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.2)",
          "300": "rgba(230, 230, 230, 0.09)",
        },
        dimgray: "#666",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "4xs": "9px",
        "80xl-6": "99.6px",
      },
    },
    fontSize: {
      "2xs-8": "10.8px",
      "xs-1": "11.1px",
      smi: "13px",
      base: "16px",
      sm: "14px",
      "smi-9": "12.9px",
      "12xl-3": "31.3px",
      lgi: "19px",
      "6xl": "25px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
