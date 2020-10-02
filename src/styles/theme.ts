import { DefaultTheme } from 'styled-components'

export const themeColors = {
  background: '#232F45',
  gray1: '#EBEBEB',
  gray2: '#898989',
  gray4: '#272727',
  white2: '#f4ede8',
}

const genericFontType = {
  'font-family': 'Roboto',
}

export const fontTypes = {
  heading: {
    ...genericFontType,
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: '25px',
  },
  title: {
    fontSize: 14,
    letterSpacing: 0.25,
    fontWeight: 600,
    lineHeight: '19px',
  },
  body: {
    ...genericFontType,
    'font-size': 14,
    letterSpacing: 0,
    lineHeight: '19px',
  },
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fontTypes: { [key in keyof typeof fontTypes]: any }
    spacing: (x: number) => number
  }
}

const theme: DefaultTheme = {
  colors: themeColors,
  fontTypes,
  spacing: number => number * 8,
}

export default theme
