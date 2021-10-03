import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';

import {useUser} from '../core/contexts/UserProvider';
import {useWaterConsumption} from '../core/contexts/WaterConsumptionProvider';

import Button from '../components/Button';

const DashboardScreen = () => {
  const {singOut} = useUser();
  const {glasses, initialLoading, increaseLoading, increaseConsumptionGlasses} =
    useWaterConsumption();
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <Text>{glasses}</Text>
      {initialLoading && <Text>ŁADOWANIE</Text>}
      <Button
        text={'Dodaj wypitą szklankę'}
        loading={increaseLoading}
        onPress={increaseConsumptionGlasses}
      />
      <Progress.Bar progress={glasses / 8 <= 1 ? glasses / 8 : 1} width={200} />
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
