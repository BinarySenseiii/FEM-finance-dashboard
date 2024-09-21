/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    colors: {
      beige: {
        100: '#F8F4F0',
        200: '#98908B',
      },
      grey: {
        100: '#F2F2F2',
        200: '#B3B3B3',
        300: '#696868',
        400: '#201F24',
      },
      white: '#FFFFFF',
      green: '#277C78',
      yellow: '#F2CDAC',
      cyan: '#82C9D7',
      navy: '#626070',
      red: '#C94736',
      purple: '#826CB0',
      Turquoise: '#597C7C',
      brown: '#93674F',
      magenta: '#934F6F',
      blue: '#3F82B2',
      gold: '#CAB361',
      orange: '#BE6C49',
      'navy-grey': '#97A0AC',
      'army-green': '#7F9161',
      'purple-light': '#AF81BA',
    },

    fontSize: {
      'preset-1': [
        '2rem',
        {
          lineHeight: '120%',
          fontWeight: '700',
        },
      ],
      'preset-2': [
        '1.25rem',
        {
          lineHeight: '120%',
          fontWeight: '700',
        },
      ],
      'preset-3': [
        '1rem',
        {
          lineHeight: '150%',
          fontWeight: '700',
        },
      ],
      'preset-4': [
        '0.875rem',
        {
          lineHeight: '150%',
          fontWeight: '400',
        },
      ],
      'preset-4-bold': [
        '0.875rem',
        {
          lineHeight: '150%',
          fontWeight: '700',
        },
      ],
      'preset-5': [
        '0.75rem',
        {
          lineHeight: '150%',
          fontWeight: '400',
        },
      ],
      'preset-5-bold': [
        '0.75rem',
        {
          lineHeight: '150%',
          fontWeight: '700',
        },
      ],
    },
    fontWeight: {
      regular: '400',
      bold: '700',
    },
    spacing: {
      4: '0.25rem',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      40: '2.5rem',
      // breakpoints
      'desktop': '90rem',
      'tablet': '48rem',
      'mobile': '23.4375rem',
    },
    fontFamily: {
      'sans': 'var(--font-sans)',
    },
  },
  plugins: [],
}
