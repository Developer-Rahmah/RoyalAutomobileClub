import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import ProductsScreen from 'RoyalAutomobileClub/src/screens/products/ProductsScreen'
import WelcomeScreen from 'RoyalAutomobileClub/src/screens/welcome/WelcomeScreen'

const AppNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='ProductsScreen' component={ProductsScreen} />
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator
