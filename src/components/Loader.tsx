import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

import Colors from '../styles/Colors';

const Loader: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.LIGHT_BLUE} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
