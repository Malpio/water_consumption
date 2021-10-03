import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import {Text, Icon} from '@ui-kitten/components';

import Colors from '../styles/Colors';

type Props = {
  header: string;
  iconName?: string;
  onIconPress?: () => void;
};

const TopBar: React.VFC<Props> = ({
  header,
  iconName = 'log-out-outline',
  onIconPress,
}) => {
  return (
    <View style={styles.container}>
      <Text category={''}>{header}</Text>
      <TouchableOpacity
        onPress={onIconPress}
        activeOpacity={0.7}
        hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}
        style={styles.iconContainer}>
        <Icon fill={Colors.GRAY} style={styles.icon} name={iconName} />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
