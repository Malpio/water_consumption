import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useUser} from '../core/contexts/UserProvider';
import Button from '../components/Button';

const DashboardScreen = () => {
  const {singOut} = useUser();

  return (
    <View>
      <Text>DASHBOARD</Text>
      <Button text={'WYLOGUJ'} onPress={singOut} />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
