import {WaterConsumptionType} from '../../api/WaterConsumptionType';

export type WaterConsumptionContextType = Pick<
  WaterConsumptionType,
  'glasses'
> & {
  increaseConsumptionGlasses: () => void;
  initialLoading: boolean;
  increaseLoading: boolean;
};
