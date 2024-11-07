import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient": "linear-gradient(90deg, #12c152 28%, #fdf0d5 90%)",
        "text-gradient-2": "linear-gradient(90deg, #fdf0d5 20%, #003049 96%);",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundClip: {
        text: "text",
      },
      },
    },
    variants: {
      extend: {
        backgroundClip: ["hover", 'focus'],
      },
    },
  plugins: [],
};
export default config;
