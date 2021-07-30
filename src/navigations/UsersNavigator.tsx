import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Menu from 'RoyalAutomobileClub/src/components/Menu/Menu';
import ListingScreen from '../screens/listing/ListingScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import DetailsScreen from '../screens/detailsScreen/DetailsScreen';
import AboutUsScreen from '../screens/aboutUs/AboutUsScreen';
import ContactUsScreen from '../screens/contactUs/ContactUsScreen';
import AllServicesScreen from '../screens/services/AllServicesScreen';
import ServiceListingScreen from '../screens/serviceListing/ServiceListingScreen';
import ServiceDetailsScreen from '../screens/serviceDetails/ServiceDetailsScreen';
import UpdateScreen from '../screens/updateProfile/UpdateScreen';
import AboutAppScreen from '../screens/aboutApp/AboutAppScreen';
import PrivacyPolicyScreen from '../screens/privacyPolicy/PrivacyPolicyScreen';
import TermsAndConditionsScreen from '../screens/termsAndConditions/TermsAndConditionsScreen';
import ChangePasswordScreen from '../screens/changePassword/ChangePasswordScreen';
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
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
        <Stack.Screen name="AboutAppScreen" component={AboutAppScreen} />
        <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
        <Stack.Screen name="AllServicesScreen" component={AllServicesScreen} />
        <Stack.Screen name="UpdateScreen" component={UpdateScreen} />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
        />
        <Stack.Screen
          name="PrivacyPolicyScreen"
          component={PrivacyPolicyScreen}
        />
        <Stack.Screen
          name="TermsAndConditionsScreen"
          component={TermsAndConditionsScreen}
        />

        <Stack.Screen
          name="ServiceDetailsScreen"
          component={ServiceDetailsScreen}
        />
        <Stack.Screen
          name="ServiceListingScreen"
          component={ServiceListingScreen}
        />
      </Drawer.Navigator>
    </>
  );
};

export default UsersNavigator;
