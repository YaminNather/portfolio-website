import type { Config } from "tailwindcss";
import * as plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // animation: {
      //   'slide-in-y': 'slide-in-y 1s forwards',
      // },
      // keyframes: {
      //   'slide-in-y': {
      //     '0%': {
      //       transform: 'translate(0px, 5px)',
      //       opacity: '0'
      //     },

      //     '100%': {
      //       transform:  'translate(0px, -30px)',
      //       opacity: '1'
      //     },
      //   }
      // }
    },
  },
  darkMode: "class",
  plugins: [
    plugin.default(function ({ matchUtilities, theme, addComponents }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      );

      addComponents(
        {
          '.animate-slide-in-y-initial': {
            transform: 'translate(0px, 16px)',
            opacity: '0',
          },
          '.animate-slide-in-y': {
            transform: 'translate(0px, 16px)',
            opacity: '0',
            animation: 'slide-in-y 1s forwards',
          }
        }
      );
    })
  ],
};
export default config;
