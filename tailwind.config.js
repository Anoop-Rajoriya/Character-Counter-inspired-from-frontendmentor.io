/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Use CSS variables
        primaryBg: "var(--primary-bg)",
        complimentaryBg: "var(--complimentary-bg)",
        primaryText: "var(--primary-text)",
        complimentaryText: "var(--complimentary-text)",
        // accent: "var(--accent)",
        error: "var(--error)",
        errorTransparent: "var(--error-transparent)",
        success: "var(--success)",
        successTransparent: "var(--success-transparent)",
        orange: "var(--orange)",
        red: "var(--red)",
        violet: "var(--violet)",
      },
    },
  },
  plugins: [],
};
