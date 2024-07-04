import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin-slow 40s linear infinite',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
      },
      backdropFilter: {
        'blur-contrast': 'blur(13.7px) contrast(0.7)',
        },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "Hero-bg": "url(/blob.svg)"
      },
      colors: {
        "Primary": '#9d1ae5',
        "secondary": '#efd25c',
      },
      fontFamily: {
        sans: ['Playwrite DE Grund', 'sans-serif'],
      },
      variants: {
        backdropFilter: ['responsive'],
      },
    },
  },
  plugins: [  ],
};

export default config;
