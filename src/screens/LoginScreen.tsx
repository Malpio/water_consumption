import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';

import {Icon, Text} from '@ui-kitten/components';
import LoginForm from '../components/forms/LoginForm';

import Colors from '../styles/Colors';
import GlobalStyles from '../styles/GlobalStyles';

const LoginScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.mainContainer} edges={['top']}>
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}>
        <View>
          <View style={styles.headerContainer}>
            <Icon
              style={styles.icon}
              fill={Colors.GRAY}
              name="log-in-outline"
            />
            <Text category={'h1'} style={GlobalStyles.header}>
              Logowanie
            </Text>
          </View>
          <LoginForm loading={false} onSubmit={() => {}} />
        </View>
        <Toast ref={ref => Toast.setRef(ref)} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 15,
  },
  contentContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexGrow: 1,
    paddingVertical: 40,
  },
  icon: {
    width: 100,
    height: 100,
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 50,
  },
  bottomContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
