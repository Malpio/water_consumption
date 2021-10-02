import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {RootStackParamsType} from '../types/navigation/NavigationTypes';

import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator<RootStackParamsType>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          component={LoginScreen}
          name={'LoginScreen'}
          options={{
            animationEnabled: true,
            gestureEnabled: true,
            cardOverlayEnabled: true,
          }}
        />
        {/* <Stack.Screen
          component={}
          name={'DashboardScreen'}
          options={{
            animationEnabled: true,
            gestureEnabled: true,
            cardOverlayEnabled: true,s
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
