import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {useUser} from './UserProvider';

import {WaterConsumptionContextType} from '../../types/core/contexts/WaterConsumptionContextType';
import {WaterConsumptionType} from '../../types/api/WaterConsumptionType';

export const defaultData: WaterConsumptionContextType = {
  glasses: 0,
  initialLoading: true,
  increaseLoading: false,
  increaseConsumptionGlasses: () => {},
};

export const waterConsumptionContext = React.createContext(defaultData);
export const useWaterConsumption = () =>
  React.useContext(waterConsumptionContext);

const WaterConsumptionProvider: React.FC = ({children}) => {
  const [data, setData] = useState<WaterConsumptionType>({
    glasses: 0,
    date: null,
  });
  const [initialLoading, setInitialLoading] = useState(true);
  const [increaseLoading, setIncreaseLoading] = useState(false);

  const {user} = useUser();

  useEffect(() => {
    const subscriber = firestore()
      .collection('user_water_glasses')
      .doc(user?.uid)
      .onSnapshot(documentSnapshot => {
        const data = documentSnapshot.data() as WaterConsumptionType;
        setData(data);

        if (data.date) {
          const date = new Date(data.date.seconds * 1000);
          const now = new Date();
          if (now.getDate() !== date.getDate()) {
            reset();
          }
        }
        setInitialLoading(false);
      });
    return () => subscriber();
  }, [user]);

  const reset = () => {
    if (user) {
      firestore().collection('user_water_glasses').doc(user.uid).update({
        glasses: 0,
        date: firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  const increaseConsumptionGlasses = async () => {
    if (user) {
      setIncreaseLoading(true);
      firestore()
        .collection('user_water_glasses')
        .doc(user.uid)
        .update({
          glasses: data.glasses + 1,
        })
        .then(() => setIncreaseLoading(false));
    }
  };

  return (
    <waterConsumptionContext.Provider
      value={{
        glasses: data.glasses,
        increaseLoading,
        initialLoading,
        increaseConsumptionGlasses,
      }}>
      {children}
    </waterConsumptionContext.Provider>
  );
};

export default WaterConsumptionProvider;
