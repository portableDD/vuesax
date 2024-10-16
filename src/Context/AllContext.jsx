import { createContext, useReducer } from "react";
import AppReducer, { initialState } from "./AllReducers";

const AppState = createContext()

export const AppStateProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer,initialState)
    return <AppState.Provider value={{state, dispatch}}>{children}</AppState.Provider>
}

export default AppState