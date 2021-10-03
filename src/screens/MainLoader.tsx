import React from 'react';
import {StyleSheet, View} from 'react-native';

import Loader from '../components/Loader';

const MainLoader: React.VFC = () => {
  return (
    <View style={styles.container}>
      <Loader />
    </View>
  );
};

export default MainLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
