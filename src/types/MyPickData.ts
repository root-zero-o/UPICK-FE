type CustomerConsider = {
  considerId: number;
};

type CustomerDetails = {
  id: number;
  considerId: number;
  takingExcerciseTimePerAWeek: string;
  stroke: boolean;
  heartDisease: boolean;
  highBloodPressure: boolean;
  diabetes: boolean;
  etc: boolean;
  memo: string;
};

export type TypeMyPickData = {
  name: string;
  gender: string;
  age: number;
  isBreastFeed: boolean;
  isPregnant: boolean;
  CustomerToConsider: CustomerConsider[];
  TakingMedicine: string[];
  CustomerDetails: CustomerDetails[];
  merchandises: string[];
};
