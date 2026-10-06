// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#faf8f3",
        "paper-raised": "#f0ede4",
        ink: "#232420",
        "ink-muted": "#5c5f58",
        slate: "#6e716a",
        rule: "#ddd9cc",
        stamp: "#2a5aa0",
        "stamp-tint": "#e4ecf6",
      },
      fontFamily: {
        sans: ["Archivo", "sans-serif"],
        mono: ["Spline Sans Mono", "monospace"],
      },
      fontSize: {
        "display-lg": ["clamp(2.75rem, 5vw + 1rem, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 3vw + 1rem, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "heading-lg": ["clamp(1.5rem, 1.2vw + 1rem, 2rem)", { lineHeight: "1.15" }],
        "heading-md": ["clamp(1.25rem, 0.8vw + 1rem, 1.5rem)", { lineHeight: "1.2" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-lg": ["clamp(1.0625rem, 0.3vw + 1rem, 1.1875rem)", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        micro: ["0.75rem", { lineHeight: "1.4" }],
      },
      maxWidth: {
        content: "1280px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      screens: {
        navbar: "975px",
        xl2: "1430px",
      },
    },
  },
  plugins: [],
};
