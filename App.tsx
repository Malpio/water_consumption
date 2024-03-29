import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import Navigation from './src/navigation';
import UserProvider from './src/core/contexts/UserProvider';
import WaterConsumptionProvider from './src/core/contexts/WaterConsumptionProvider';
import useNotification from './src/hooks/useNotification';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  useNotification();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider style={backgroundStyle}>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle={'dark-content'}
          />
          <UserProvider>
            <WaterConsumptionProvider>
              <Navigation />
            </WaterConsumptionProvider>
          </UserProvider>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
};
export default App;
