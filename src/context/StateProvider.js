import { createContext, useContext, useReducer } from "react";


export const StateContext = createContext()

export const StateProvider =({intialState,children,reducer})=>(
  <StateContext.Provider value={useReducer(reducer,intialState)}>
        {children}
  </StateContext.Provider>
)

export const useStatevalue = ()=> useContext(StateContext)