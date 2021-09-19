export const intialState = {
  cart: [],
  user: null,
};
export const getBasketTotal = (cart)=>{
  let total = 0 ;
  for (let item of cart) {
    console.log(item)
    total+=parseInt(item["price"]) ;
  }
  return parseInt(total)  ;
}
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM" :
      return {...state , cart : [...state.cart , action.item]}
    case "REMOVE_ITEM" :
      let newCart  = state.cart ;
      let newItems = newCart.filter((item)=>{
        return item.id != action.id
      })
     
      return {...state , cart : newItems}
    case "ADD_USER":
      return { ...state, user: action.user };
    case "REMOVE_USER":
      return { ...state, user: action.user };
    default:
      console.log(state, action);
      return state;
  }
};
export default reducer;
