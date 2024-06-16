import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        "heading-xl": [
          "45px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.04em",
            fontWeight: "600",
          },
        ],
        "heading-lg": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "-0.04em",
            fontWeight: "600",
          },
        ],
        "heading-md": [
          "24px",
          {
            lineHeight: "30px",
            letterSpacing: "-0.04em",
            fontWeight: "600",
          },
        ],
        "paragraph-lg": [
          "20px",
          {
            lineHeight: "25px",
            letterSpacing: "-0.02em",
            fontWeight: "500",
          },
        ],
        "paragraph-md": [
          "16px",
          {
            lineHeight: "20px",
            letterSpacing: "-0.02em",
            fontWeight: "500",
          },
        ],
        "paragraph-sm": [
          "14px",
          {
            lineHeight: "15px",
            letterSpacing: "-0.02em",
            fontWeight: "500",
          },
        ],
      },
      colors: {
        app: {
          background: "#F0F0F0",
          blue: "#22A6F5",
          text: "#728098",
          border: "#D7DBE2",
          green: {
            light: "#75E0AC",
            dark: "#18A86B",
          },
        },
      },
      background: {
        blue: "linear-gradient(to bottom right, #A4D5F2 0%, #22A6F5 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #A4D5F2 0%, #22A6F5 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #A4D5F2 0%, #22A6F5 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #A4D5F2 0%, #22A6F5 50%) top right / 50% 50% no-repeat",
        "gradient-primary": `linear-gradient(to right, #A4D5F2}, #22A6F5})`,
      },
      dropShadow: {
        image: "0px 2px 10px 0px rgba(0, 0, 0, 0.04);",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
