/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        logarithm: {
          bg: "#060813",
          cyan: "#00F2FE",
          teal: "#05D5B2",
          purple: "#7928CA",
          magenta: "#B829E3",
        },
      },
    },
  },
  plugins: [],
};