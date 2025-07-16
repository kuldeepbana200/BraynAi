// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // or adjust to your file paths
  ],
  theme: {
    extend: {
      colors: {
        primary: "#283389", // <== Your primary brand color
      },
      fontFamily: {
        logo: ['Audiowide', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
