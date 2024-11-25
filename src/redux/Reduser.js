const initialState = {
  data:[]
}




const userReduser = (state=initialState,Action) => {
switch(Action.type) {
  case "USER_SUBMIT" : 
    return {
      ...state,
      data:Action.payload
  }
  case "USER_DELETE" :
    return {
      ...state,
      data:Action.payload
    }
}
};
export default userReduser;

