const INITIAL_STATE = {
    username : "Haris",
    gmail : "Haris@gmail.com"
}

export default (state = INITIAL_STATE,action) =>{

    console.log("auth_Action => ",action);
     return state;
}