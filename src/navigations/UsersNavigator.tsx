import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Colors} from 'RoyalAutomobileClub/assets/styles/Colors';
import Menu from 'RoyalAutomobileClub/src/components/Menu/Menu';
import ListingScreen from '../screens/listing/ListingScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
const Drawer = createDrawerNavigator();

const UsersNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <Menu {...props} />}
        drawerType={'back'}
        drawerStyle={{
          width: '80%',
          backgroundColor: 'transparent',
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ListingScreen" component={ListingScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Drawer.Navigator>
    </>
  );
};

export default UsersNavigator;
