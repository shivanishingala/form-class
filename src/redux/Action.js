


export const userSubmit = (data) => {
  return {
   type:"USER_SUBMIT",
   payload:data
  }
}
  export const userDelete = (data) => {
   return {
      type:"USER_DELETE",
      payload:data
   }
  }