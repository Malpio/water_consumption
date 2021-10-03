import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';

import {useUser} from '../core/contexts/UserProvider';
import {useWaterConsumption} from '../core/contexts/WaterConsumptionProvider';
import {Text} from '@ui-kitten/components';

import Button from '../components/Button';
import Loader from '../components/Loader';
import TopBar from '../components/TopBar';

const WIDTH = Dimensions.get('screen').width;

const DashboardScreen = () => {
  const {singOut} = useUser();
  const {glasses, initialLoading, increaseLoading, increaseConsumptionGlasses} =
    useWaterConsumption();
  return (
    <SafeAreaView style={styles.mainContainer} edges={['top', 'bottom']}>
      <TopBar onIconPress={singOut} header={'Dashboard'} />
      <View style={styles.container}>
        <View />
        {initialLoading ? (
          <Loader />
        ) : (
          <View>
            <Text
              style={styles.text}
              category={
                'h6'
              }>{`Ilość wypitych dziś szklanek wody: ${glasses}`}</Text>
            <Button
              text={'Dodaj wypitą szklankę'}
              loading={increaseLoading}
              onPress={increaseConsumptionGlasses}
            />
            <Text style={styles.text} category={'c2'}>
              Pamiętaj, że powinieneś pić około 8 szklanek wody dziennie!
            </Text>
          </View>
        )}
        <Progress.Bar
          progress={glasses / 8 <= 1 ? glasses / 8 : 1}
          width={WIDTH - 30}
        />
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'center',
  },
});
