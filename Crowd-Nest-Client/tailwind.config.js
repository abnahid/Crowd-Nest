/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "serif"],
        lora: ["Lora", "serif"],
        dmSans: ["DM Sans", "serif"],
      },
      colors: {
        primary: "#FF7A00",
        darkBg: "#1a202c",
        secondary: "#11142D",
        darkGray: "#333333",
        bgColor: "#5C54AB",
        btnHover: "#FFAF66",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5C54AB",
          secondary: "#11142D",
          accent: "#FF7A00",
          neutral: "#333333",
          "base-100": "#FFFFFF",
          "base-200": "#F7F8FC",
          "base-300": "#E5E7EB",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
        mydarktheme: {
          primary: "#5C54AB",
          secondary: "#1F2937",
          accent: "#FFAF66",
          neutral: "#1E1E2F",
          "base-100": "#111827",
          "base-200": "#1F2937",
          "base-300": "#374151",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
    darkTheme: "mydarktheme", // Set the default dark theme
  },
  darkMode: "class", // Enable class-based dark mode
};