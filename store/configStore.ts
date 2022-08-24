import { UserRegistrationModel } from "./../shared/Types";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./modules";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
// configureStore
// - 기본 미들웨어로 redux-thunk를 자동으로 추가해준다.
// - Redux DevTools Extension을 자동으로 활성화해준다.

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    // devTools : boolean 값으로 개발자 도구 on/off
    // preloadedState: store 초기값 설정
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = ThunkDispatch<UserRegistrationModel, any, AnyAction>;

const wrapper = createWrapper<AppStore>(makeStore);

export default wrapper;
