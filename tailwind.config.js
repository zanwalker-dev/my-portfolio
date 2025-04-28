/** @type {import('tailwindcss').Config} */

import tailwindSrollbar from "tailwind-scrollbar";

export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [tailwindSrollbar],
};
