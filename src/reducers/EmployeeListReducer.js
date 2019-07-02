import types from '../actions/types';
const INITIAL_STATE={
    employeeData:[],

}
export default function reducer(state=INITIAL_STATE,action){
switch(action.type){
    case types.EMPLOYEE_LIST:
        return{
            ...state,
            employeeData:action.payload,

        }
            
                        default:
                       return state;
                    
}
}


