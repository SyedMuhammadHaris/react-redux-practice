// Here we create all the actions or functions which we perform for the database

const setData = (data) => {
   return (dispatch) => {
    //    console.log("Hello")
       dispatch({type: "SETDATA", data:data})
}
}

export {
    setData
}