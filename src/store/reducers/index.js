import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const reducers = combineReducers({
  dataReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
