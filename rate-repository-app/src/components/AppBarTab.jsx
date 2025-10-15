import { Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import { theme } from '../theme'

const AppBarTab = ({ children, isActive = false, to }) => {
  return (
    <Link to={to} style={styles.container}>
      <Text style={[styles.text, isActive && styles.activeText]}>
        {children}
      </Text>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  text: {
    color: theme.colors.textOnPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.normal,
  },
  activeText: {
    fontWeight: theme.fontWeights.bold,
  },
})

export default AppBarTab
