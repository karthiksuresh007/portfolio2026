import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f4f0e8",
        ink: "#141312",
        mist: "#d9d2c6",
        moss: "#35493f",
        amber: "#c1834b",
        clay: "#725f4f"
      },
      boxShadow: {
        panel: "0 18px 80px rgba(20, 19, 18, 0.08)",
        float: "0 32px 120px rgba(20, 19, 18, 0.16)"
      },
      backgroundImage: {
        "paper-grid": "linear-gradient(rgba(20, 19, 18, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 19, 18, 0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
