import { createContext, useReducer } from "react";
import AppReducer, { initialState } from "./AllReducers";

const AppState = createContext()

export const AppStateProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer,initialState)
    const totalProductPrice = initialState.cart.reduce((acc, item) => {
        return acc += item.price *item.count
      }, 0)
    
      const total = totalProductPrice - initialState.discount + initialState.tax
    return <AppState.Provider value={{state, dispatch, total, totalProductPrice}}>{children}</AppState.Provider>
}

export default AppState