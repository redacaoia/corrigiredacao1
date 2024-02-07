import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    
    extend: {
      colors: {
        blue1: "#0157C8",
        blue2: "#28A0F6",
        graydefault: "#888888",
        black1: "#222222",
        background: "#F4F6FF",

        linkedin: "#0077b5",
        facebook: "#3b5999",
        whatsapp: "#25d366",
        instagram: "#e4405f",

        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background2: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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

        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bellRing: {

          " 15%": {
            transform: "rotateZ(10deg)",
          },

          " 30% ": {
            transform: "rotateZ(-10deg)",
          },

          "45% ": {
            transform: "rotateZ(5deg)",
          },

          "60%": {
            transform: "rotateZ(-5deg)",
          },
          "75%": {
            transform: "rotateZ(2deg)",
          },
        },
        "fade-up": {
          "0%": {
            opacity: '0',
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: '0.6',
          },
          "100%": {
            opacity: '1',
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: '0',
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity:' 0.6',
          },
          "100%": {
            opacity: '1',
            transform: "translateY(0px)",
          },
        },
         // Tooltip
         "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        bellRing: "bellRing 0.9s both",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
