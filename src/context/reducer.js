export const intialState = {
    cart:[] ,
    user : null
}
const reducer = (state , action) =>{
    switch(action.type) {
        case "ADD_USER" : 
        console.log(state,action)
        return { ...state , user : action.user}
        default :
        console.log(state,action) 
        return state
    }
}
export default reducer