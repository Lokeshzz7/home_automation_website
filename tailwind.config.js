module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#4ade80', // Tailwind emerald-400
        secondary: '#22d3ee', // cyan-400
      },
    },
  },
  plugins: [],
};
