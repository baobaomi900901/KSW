module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    minWidth: {
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
      2.5: "2.5rem",
      3: "3rem",
    },
    minHeight: {
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
      2.5: "2.5rem",
      3: "3rem",
    },
    extend: {
      colors: {
        theme: {
          default: "#2882FF",
          light: "#FFFFFF",
        },
        normal: "#38363C",
        gray: {
          25: "#FAFAFA",
          50: "#F5F5F5",
          100: "#EAE8EB",
          200: "#CDCACF",
          300: "#AFABB3",
          400: "#736F78",
          500: "#38363C",
          600: "#312D38",
          700: "#312D38",
          800: "#181324",
          900: "#0F0B1C",
          950: "#080512",
        },
        status: {
          primary: "#2882FF",
          success: "#22C55E",
          warning: "#F97316",
          danger: "#EF4444",
          info: "#6B7280",
          captured: "#FAC814",
        }

      },
      // 自定义间距, 作用于 padding, margin, width, height, top, bottom, left, right
      spacing: {
        px: "1px",
        30: "7.5rem",
        50: "12.5rem",
        70: "17.5rem",
        80: "20rem",
        100: "25rem",
        pager: "78rem",
      },
      // 阴影
      boxShadow: {
        "base": "0 0.25rem 0.75rem 0 rgba(0, 0, 0, 0.16)",
        "input-active": "0 0 0 0.25rem rgba(40, 130, 255, 0.2)",
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
