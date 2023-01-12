import { combineReducers } from "redux";
import studentReducer from "./student";
const rootReducer = combineReducers({
    studentReducer,
})
export default rootReducer