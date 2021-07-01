import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import LocalStorage from '../services/helper/LocalStorage';
import {setAuthTokenAction} from '../services/redux/actions';
import NonUserNavigator from './NonUserNavigator';
import UsersNavigator from './UsersNavigator';

const AppNavigator = () => {
  interface RootState {
    authToken: string;
  }
  const token = (state: RootState) => state.authToken;
  const useToken = useSelector(token);
  const dispatch = useDispatch();
  const getToken = async () => {
    const authToken = await LocalStorage.get('authToken');
    console.log('authToken', authToken);

    dispatch(setAuthTokenAction(authToken));
  };
  useEffect(() => {
    getToken();
  }, []);

  const Stack = createStackNavigator();
  console.log('rrrrrr', useToken === null );

  return (
    <>
      <Stack.Navigator headerMode="none">
        {useToken === null ? (
          <Stack.Screen name="NonUser" component={NonUserNavigator} />
        ) : (
          <Stack.Screen name="User" component={UsersNavigator} />
        )}
      </Stack.Navigator>
    </>
  );
};

export default AppNavigator;
