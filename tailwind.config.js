/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px",
      },
      backdropBrightness: {
        40: ".40",
      },
      colors: {
        "black-haze": {
          50: "#f5f7f8",
          100: "#ecf0f2",
          200: "#d6dee1",
          300: "#b1c2c8",
          400: "#87a1a9",
          500: "#68868f",
          600: "#536c76",
          700: "#445860",
          800: "#3b4a51",
          900: "#344046",
          950: "#232b2e",
        },
        mercury: {
          50: "#f7f8f8",
          100: "#e8eaeb",
          200: "#d9dcde",
          300: "#b8bfc1",
          400: "#919c9f",
          500: "#738084",
          600: "#5d686c",
          700: "#4c5558",
          800: "#41484b",
          900: "#393f41",
          950: "#26292b",
        },
        iceberg: {
          50: "#f1fafa",
          100: "#d8efef",
          200: "#bee3e3",
          300: "#90cdd0",
          400: "#5cb0b4",
          500: "#40959a",
          600: "#387a82",
          700: "#33646b",
          800: "#30545a",
          900: "#2c474d",
          950: "#192e33",
        },
      },
      fontFamily: {
        abrilfatface: "Abril Fatface, serif",
      },
      translate: {
        "1.5x": "150%",
      },
      transitionTimingFunction: {
        "out-elastic": "cubic-bezier(.16,1.01,.3,1)",
      },
      animation: {
        fadeIn: "fadeIn 0.5s forwards ease-out",
        fadeOut: "fadeOut 0.4s forwards ease-out ",
        moveInLeft: "moveInLeft 0.5s forwards ease-out",
        moveLeft: "moveLeft 40s infinite linear",
      },
      keyframes: {
        fadeIn: {
          from: {},

          to: {
            backgroundColor: "#0008",
          },
        },

        fadeOut: {
          "0%": {
            backgroundColor: "#0008",
          },

          "99%": {
            backgroundColor: "#0000",
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },

        moveInLeft: {
          "0%": {
            transform: "translateX(50%)",
            opacity: 0,
          },

          "50%": {
            opacity: 0,
          },

          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },

        moveLeft: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};
