import { combineReducers } from "redux";
import userSlice from "./userSlice";
import postingSlice from "./postingSlice";
import peoplePickSlice from "./peoplePickSlice";
import pharmacistsSlice from "./pharmacistsSlice";
import recentMerchandisesSlice from "./recentMerchandisesSlice";
import medicineSlice from "./medicineSlice";

// 루트 리듀서
const rootReducer = combineReducers({
  user: userSlice,
  postings: postingSlice,
  peoplePick: peoplePickSlice,
  pharmacists: pharmacistsSlice,
  recentMerchandises: recentMerchandisesSlice,
  medicine: medicineSlice,
}); // 리듀서가 추가되면 여기에 넣는다.

export default rootReducer;

// 루트 리듀서의 반환값를 유추해준다.
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 export
export type RootState = ReturnType<typeof rootReducer>;
