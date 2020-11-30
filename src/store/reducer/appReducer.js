const INITIAL_STATE = {
    app_name : "chat App",
}

export default (state = INITIAL_STATE,action) => {
    console.log("app_Action => ",action)
    switch(action.type){
        case "SETDATA":
        return ({
            ...state,
            app_name : action.data
        })

    }
   
    return state;
}