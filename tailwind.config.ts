import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        maincolor: '#A80000',
        bgcolor: '#333',
        lightcolor: '#FDFBFB'
      },
      fontFamily: {
        montserrat: 'var(--montserrat)',
        opensans: 'var(--opensans)',
        lato: 'var(--lato)',
      },
    },
    plugins: [],
  },
}
export default config
