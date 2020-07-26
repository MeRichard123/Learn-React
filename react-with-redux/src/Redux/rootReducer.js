import { combineReducers } from "redux";
import IceCreamReducer from "./Reducers/IceCreamReducer";
import cakeReducer from "./Reducers/cakeReducer";
import subwayReducer from "./Reducers/subwayReducer";
import userReducer from "./Reducers/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
  subway: subwayReducer,
  user: userReducer,
});

export default rootReducer;
