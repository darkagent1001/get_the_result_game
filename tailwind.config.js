/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    borderRadius: {
      none: "0",
      DEFAULT: "0.5rem",
      sm: "0.25rem",
      lg: "0.75",
      full: "100%",
    },
    spacing: {
      "0": "0",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "3rem",
    },
    extend: {},
  },
  plugins: [
    module.exports = {
      important: true,
    },
  ],
}
