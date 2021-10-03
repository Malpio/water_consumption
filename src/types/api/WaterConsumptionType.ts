export type WaterConsumptionType = {
  glasses: number;
  date: FirestoreTimestamp | null;
};

type FirestoreTimestamp = {
  nanoseconds: number;
  seconds: number;
};
