
import types from "./types";
import history from '../js/history';

//action
function setLoginPending(isLoginPending){
    return dispatch => {
       
            dispatch({
              type: types.LOGIN_PENDING,
              payload: isLoginPending
            });
        
      };

}
function setLoginSuccess(isLoginSuccess){
    return dispatch => {
       
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: isLoginSuccess
        });
    
  };
}


export function login(email,password){
    return dispatch => {

        if( email === 'hruday@gmail.com' &&  password === 'hruday123'){
            // dispatch(setLoginPending(false));
            dispatch(setLoginSuccess(true));
            history.push("/dashboard");
            
        }else{
            dispatch(setLoginPending(false));
         }
      };

    }