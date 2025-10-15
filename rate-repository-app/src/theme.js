import { Platform } from 'react-native'

export const theme = {
  colors: {
    appBar: '#24292e',
    primary: '#0366d6',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textOnPrimary: '#ffffff',
    background: '#ffffff',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 18,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
}
