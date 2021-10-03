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
  const [data, setData] = useState<WaterConsumptionType>({glasses: 0});
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
        setInitialLoading(false);
      });
    return () => subscriber();
  }, [user]);

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
        ...data,
        increaseLoading,
        initialLoading,
        increaseConsumptionGlasses,
      }}>
      {children}
    </waterConsumptionContext.Provider>
  );
};

export default WaterConsumptionProvider;
