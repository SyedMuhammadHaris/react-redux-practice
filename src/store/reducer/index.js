// Here we create global state or store

// const INITIAL_STATE = {
//     name : "Sarim",
// }

// export default (state = INITIAL_STATE) =>{
//   return state;
// }

import { combineReducers } from 'redux';
import authReducer  from "./authReducer";
import  appReducer  from "./appReducer";

export default combineReducers({
    auth : authReducer,
    app : appReducer
})