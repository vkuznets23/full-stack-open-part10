import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import { theme } from '../theme'
import { useLocation } from 'react-router-native'
import { ScrollView } from 'react-native'

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
  const location = useLocation()

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab to="/" isActive={location.pathname === '/'}>
          Repositories
        </AppBarTab>
        <AppBarTab to="/signin" isActive={location.pathname === '/signin'}>
          Sign In
        </AppBarTab>
      </ScrollView>
    </View>
  )
}

export default AppBar
