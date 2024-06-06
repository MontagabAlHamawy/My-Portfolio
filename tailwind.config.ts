/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      xl: "1024px",
    },
    extend: {
      direction: ['rtl'],
      colors: {
        primary: "#101828",
        secondary: "#777777",
        accent: {
          DEFAULT: "#707afe",
          hover: "#8088f5",
          cerve: "#707afe9e",
        },
        body: "#1c1d2b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    },
  },
  variants: {},
  plugins: [],
};
