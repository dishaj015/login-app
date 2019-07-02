import { combineReducers } from "redux";
import LoginReducer from "./LoginReducers";
import EmployeeListReducer from './EmployeeListReducer';
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  Auth: LoginReducer,
  employee:EmployeeListReducer,
  form: formReducer,
});

export default rootReducer;
