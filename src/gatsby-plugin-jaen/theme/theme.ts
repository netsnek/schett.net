import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
  baseTheme
} from '@chakra-ui/react'

const theme = extendTheme(
  baseTheme,
  {
    colors: {
      ...baseTheme.colors,
      brand: baseTheme.colors.purple
    }
  },
  withDefaultColorScheme({
    colorScheme: 'brand'
  })
)

export default theme
