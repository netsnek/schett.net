import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
  baseTheme
} from '@chakra-ui/react'

export const colors = {}

const theme = extendTheme(
  baseTheme,
  {
    colors: {
      ...baseTheme.colors,
      brand: {
        100: '#e9f3fc',
        200: '#bfdaf4',
        300: '#67a7e2',
        400: '#509add',
        500: '#348dd7',
        600: '#0580d2',
        700: '#046eb6',
        750: '#035d9b',
        800: '#035d9b',
        900: '#013d68'
      }
    }
  },
  withDefaultColorScheme({
    colorScheme: 'brand'
  })
)

export default theme
