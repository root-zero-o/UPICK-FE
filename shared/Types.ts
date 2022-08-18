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
