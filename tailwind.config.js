/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#FAFDFF",
        textColor: "#413C6D",
        switchColor: "#120B48",
        borderColor: "#100A42"
      }
    },
  },
  plugins: [],
}
