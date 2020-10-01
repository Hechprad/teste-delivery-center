import { DefaultTheme } from 'styled-components'

// darkPurple: '#232129',
// gray1: '#666360',
// red: '#C53030',
export const themeColors = {
  background: '#232F45',
  gray1: '#9197A2',
  magenta1: '#E53B6A',
  magenta2: '#E62254',
  white1: '#ffffff',
  white2: '#f4ede8',
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string }
    spacing: (x: number) => number
  }
}

const theme: DefaultTheme = {
  colors: themeColors,
  spacing: number => number * 8,
}

export default theme
