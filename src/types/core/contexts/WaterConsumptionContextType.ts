import {WaterConsumptionType} from '../../api/WaterConsumptionType';

export type WaterConsumptionContextType = WaterConsumptionType & {
  increaseConsumptionGlasses: () => void;
  initialLoading: boolean;
  increaseLoading: boolean;
};
