
import types from "./types";
import {employList} from '../js/employList';
export function getEmployeeList(){
    return dispatch => {
       
        dispatch({
          type: types.EMPLOYEE_LIST,
          payload: employList.user
        });
    
  };
}