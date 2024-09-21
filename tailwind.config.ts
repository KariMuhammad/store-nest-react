import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
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
    },
    extend: {
      screens: {
        // xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1610px",
        // "small-to-medium": { min: "486px", max: "767px" },
      },
      colors: {
        mainColor: "#253D4E",
        rateColor: "#B6B6B6",
        priceNowColor: "#3BB77E",
        priceOldColor: "#adadad",
        shopCategoryColor: "#BCE3C9",
        specialColor: {
          primary: "#7E7E7E",
          secondary: "#253D4E",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        light: {
          DEFAULT: "hsl(var(--light))",
          background: "hsl(var(--light-background))",
        },
        "black-soft-foreground": {
          DEFAULT: "hsl(var(--black-soft-foreground))",
        },
        secondary: {
          DEFAULT: "#253D4E",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        custom: ["Quicksand", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      keyframes: {
        "bounce-up": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-5px)",
          },
        },
      },
      boxShadow: {
        lg: "5px 5px 15px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        "bounce-up": "bounce-up 0.5s cubic-bezier(0.71, 1.7, 0.77, 1.24)",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
