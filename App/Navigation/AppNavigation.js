import { createAppContainer } from 'react-navigation'
import PaymentScreen from '../Containers/PaymentScreen'
import MeasurementScreen from '../Containers/MeasurementScreen'
import FilterScreen from '../Containers/FilterScreen'
import TabsSScreen from '../Containers/TabsSScreen'
import TabsScreen from '../Containers/TabsScreen'
import DetailScreen from '../Containers/DetailScreen'
import ClothsScreen from '../Containers/ClothsScreen'
import HomeScreen from '../Containers/HomeScreen'
import LoginScreen from '../Containers/LoginScreen'
import { createStackNavigator } from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  PaymentScreen: { screen: PaymentScreen },
  MeasurementScreen: { screen: MeasurementScreen },
  FilterScreen: { screen: FilterScreen },
  TabsSScreen: { screen: TabsSScreen },
  TabsScreen: { screen: TabsScreen },
  DetailScreen: { screen: DetailScreen },
  ClothsScreen: { screen: ClothsScreen },
  HomeScreen: { screen: HomeScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'TabsScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
