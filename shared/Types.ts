export interface userType {
  loading: boolean;
  error: any;
  userInfo: {
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
  username?: string;
}
