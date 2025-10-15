import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import { theme } from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: theme.spacing.lg,
    paddingLeft: theme.spacing.sm,
    backgroundColor: theme.colors.appBar,
    flexDirection: 'row',
    alignItems: 'center',
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab isActive={true}>Repositories</AppBarTab>
    </View>
  )
}

export default AppBar
