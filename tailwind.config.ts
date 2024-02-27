/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      "2xsm": "375px",
      xsm: "425px",
      "3xl": "2000px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
        khand: "var(--font-khand)",
        mukta: "var(--font-mukta)",
      },
      colors: {
        brand: {
          red: "#C62026",
          blue: "#2E3092",
        },
        "new-blue": {
          sky: "#70c9ff",
        },
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        // black: "#1C2434",
        // red: "#FB5454",
        "black-2": "#010101",
        body: "#64748B",
        bodydark: "#AEB7C0",
        bodydark1: "#DEE4EE",
        bodydark2: "#8A99AF",
        // primary: "#3C50E0",
        // secondary: "#80CAEE",
        stroke: "#E2E8F0",
        // gray: "#EFF4FB",
        graydark: "#333A48",
        "gray-2": "#F7F9FC",
        "gray-3": "#FAFAFA",
        whiten: "#F1F5F9",
        whiter: "#F5F7FD",
        boxdark: "#24303F",
        "boxdark-2": "#1A222C",
        strokedark: "#2E3A47",
        "form-strokedark": "#3d4d60",
        "form-input": "#1d2a39",
        "meta-1": "#DC3545",
        "meta-2": "#EFF2F7",
        "meta-3": "#10B981",
        "meta-4": "#313D4A",
        "meta-5": "#259AE6",
        "meta-6": "#FFBA00",
        "meta-7": "#FF6766",
        "meta-8": "#F0950C",
        "meta-9": "#E5E7EB",
        "meta-10": "#0FADCF",
        success: "#219653",
        danger: "#D34053",
        warning: "#FFA70B",
      },
      zIndex: {
        minus_100: "-100",
        minus_10: "-10",
        minus_1: "-1",
        mobile_stepper: "1000",
        fab: "1050",
        speed_dial: "1050",
        app_bar: "1100",
        drawer: "1200",
        modal: "1300",
        snackbar: "1400",
        tooltip: "1500",
      },

      keyframes: {
        slideUp: {
          "0%": { height: "400px" },
          "100%": { height: "0" },
        },
        slideDown: {
          "0%": { height: "0" },
          "80%": { height: "h-fit" },
        },
        slideRightMiniLogo: {
          "0%": { marginLeft: "0" },
          "80%": { marginLeft: "56px" },
        },
        showUp: {
          "0%": { opacity: "1" },
          "30%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        showDown: {
          "0%": { opacity: "0" },
          "30%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        slideUp: "slideUp 0.3s ease-out",
        slideDown: "slideDown 0.3s ease-out",
        slideRightMiniLogo: "slideRightMiniLogo 0.5s ease-out",
        showUp: "showUp 0.6s ease-out",
        showDown: "showDown 0.6s ease-in",
      },
    },
  },
  plugins: [],
};
export default config;
