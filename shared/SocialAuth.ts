// GOOGLE
const GOOGLE_CLIENTID = process.env.NEXT_PUBLIC_GOOGLE_CLIENTID;
const GOOGLE_REDIRECT_URI = "http:/localhost:3000/oauth/google/callback";

export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENTID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile%20openid&access_type=offline`;

// KAKAO
const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_CLIENTID;
// export const KAKAO_REDIRECT_URI = `http://localhost:3000/customers/sign-in/kakao`;
export const KAKAO_REDIRECT_URI = `https://upick-fe.vercel.app/customers/sign-in/kakao`;
// export const KAKAO_REDIRECT_URI = `http://13.124.107.239/customers/sign-in/kakao`;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

//Naver
const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENTID;
const STATE_STRING = process.env.NEXT_PUBLIC_NAVER_STATE;
const NAVER_REDIRECT_URI = "http://localhost:3000/oauth/naver/callback";

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&response_type=code&state=${STATE_STRING}`;
