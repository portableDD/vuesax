import { createContext, useEffect, useReducer } from "react";
import AppReducer, { initialState } from "./AllReducers";

const AppState = createContext();

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // const totalProductPrice = initialState.cart.reduce((acc, item) => {
  //     return acc += item.price *item.count
  //   }, 0)

  //   const total = totalProductPrice - initialState.discount + initialState.tax

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch({ type: "SET_THEME", payload: JSON.parse(savedTheme) });
    }
  }, []);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(state.darkMode));
    if (state.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.darkMode]);

  return (
    <AppState.Provider value={{ state, dispatch }}>
      {children}
    </AppState.Provider>
  );
};

export default AppState;
