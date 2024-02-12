import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-crimson': '#191114',
        'primary-crimson-v2': '#201318',
        'secondary-crimson': '#381525',
        'secondary-crimson-v2': '#4D122F',
        'tertiary-crimson': '#5C1839',
        'tertiary-crimson-v2': '#6D2545',
        'focus-crimson': '#B0436E',
        'solid-crimson': '#EE518A',
      },
      borderRadius: {
        DEFAULT: '30px',
      },
    },
  },
  plugins: [],
};
export default config;
