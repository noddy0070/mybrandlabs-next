/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7A28CB',
          cream: '#F2F3D9',
          dark: '#32292F',
        },
      },
      fontFamily: {
        brand: ["'Acumin Variable Concept'", 'sans-serif'],
        heading: ["'Inter'", 'sans-serif'],
        body: ["'Noto Sans'", 'sans-serif'],
      },
    },
  },
}; 