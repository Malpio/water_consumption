import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {RootStackParamsType} from '../types/navigation/NavigationTypes';

import LoginScreen from '../screens/LoginScreen';
import MainLoader from '../screens/MainLoader';
import DashboardScreen from '../screens/DashboardScreen';

import {useUser} from '../core/contexts/UserProvider';

const Stack = createStackNavigator<RootStackParamsType>();

const Navigation: React.FC = () => {
  const {initializing, user} = useUser();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {initializing ? (
          <Stack.Screen
            component={MainLoader}
            name={'MainLoader'}
            options={{
              animationEnabled: true,
              gestureEnabled: true,
              cardOverlayEnabled: true,
            }}
          />
        ) : (
          <>
            {user ? (
              <Stack.Screen
                component={DashboardScreen}
                name={'DashboardScreen'}
                options={{
                  animationEnabled: true,
                  gestureEnabled: true,
                  cardOverlayEnabled: true,
                }}
              />
            ) : (
              <Stack.Screen
                component={LoginScreen}
                name={'LoginScreen'}
                options={{
                  animationEnabled: true,
                  gestureEnabled: true,
                  cardOverlayEnabled: true,
                }}
              />
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
