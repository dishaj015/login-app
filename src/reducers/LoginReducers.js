import types from '../actions/types';
const INITIAL_STATE={
    isLoginPending:false,
    isLoginSuccess:false,
    isLoggedIn:false
}
export default function reducer(state=INITIAL_STATE,action){
switch(action.type){
    case types.LOGIN_SUCCESS:
        return{
            ...state,
            isLoginSuccess:true,
            isLoginPending:false,
            isLoggedIn:true,

        };
        case types.LOGIN_FAILED:
                return{
                    ...state,
                    isLoginSuccess:false,
                    isLoginPending:true,
                    isLoggedIn:false,
                };
            
                        default:
                       return state;
                    
}
}


