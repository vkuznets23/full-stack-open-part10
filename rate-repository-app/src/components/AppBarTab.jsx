import { Pressable, Text, StyleSheet } from 'react-native'
import { theme } from '../theme'

const AppBarTab = ({ children, onPress, isActive = false }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={[styles.text, isActive && styles.activeText]}>
        {children}
      </Text>
    </Pressable>
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
