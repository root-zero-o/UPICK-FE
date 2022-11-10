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

type MedType = {
  merchandise: {
    name: string;
  };
};

export type TypeMyPickData = {
  name: string;
  gender: string;
  age: number;
  isBreastFeed: boolean;
  isPregnant: boolean;
  CustomerToConsider: CustomerConsider[];
  TakingMedicine: MedType[];
  CustomerDetails: CustomerDetails[];
  merchandises: string[];
};

export type TypeMedImage = {
  createdAt: string;
  id: number;
  key: string;
  merchandiseId: number;
  pharmacistId: any;
  updatedAt: string;
  url: string;
};

export type TypeCompany = {
  createdAt: string;
  id: number;
  name: string;
  updatedAt: string;
};
export type TypeRecentMed = {
  Image: TypeMedImage;
  company: TypeCompany;
  id: number;
  name: string;
};

export type TypeLikeMed = {
  id: number;
  companyId: number;
  name: string;
  certification: boolean;
  createdAt: string;
  updatedAt: string;
  rating: string;
  merchandiseHowToConsumeId: number;
  description: string;
};

export type TypesLikeSub = {
  id: number;
  title: string;
  content: string;
  pharmacistId: number;
  createdAt: string;
  updatedAt: string;
  gender: string;
};

export type TypePick = {
  isPicked: boolean;
  pharmacyAdress: string;
  pharmacyName: string;
  pickableAt: string;
};

type ImageType = {
  url: string;
};

export type TypesLikePhar = {
  Image: ImageType[];
  userName: string;
  pharmacyName: string;
  id: number;
};

export type TypesPickUp = {
  CustomerPickUps: TypePick[];
  name: string;
  Image: ImageType;
};
