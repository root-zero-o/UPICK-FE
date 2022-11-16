export interface userType {
  loading: boolean;
  error: any;
  userInfo: {
    dupCheck: boolean | null;
    isLogin: boolean;
    nickname: string;
    email: string;
    savedName: string;
    savedEmail: string;
  };
}

export interface UserRegistrationModel {
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
}

export interface PharmacistsDataType {
  Image: [
    {
      url: string;
    }
  ];
  counselingEndTime: string;
  counselingStartTime: string;
  createdAt: string;
  email: string;
  id: number;
  password: string;
  pharmacyAddress: string;
  pharmacyName: string;
  updatedAt: string;
  userName: string;
}

export interface PharmacistInitialDataType {
  pharmacists: PharmacistsDataType[];
  loading: boolean;
  error: boolean;
}

export interface RecentMerchandisesDataType {
  Image: {
    url: string;
  };
  MerchandiseEffect: [{ effect: string }];
  certification: boolean;
  company: {
    name: string;
  };
  companyId: number;
  createdAt: string;
  description: string;
  id: number;
  merchandiseHowToConsumeId: number;
  name: string;
  rating: string;
  updatedAt: string;
}

export interface RecentMerchandisesInitialStateType {
  recentMerchandises: RecentMerchandisesDataType[];
  loading: boolean;
  error: boolean;
}
