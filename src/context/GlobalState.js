import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Initial value of the store
const initialState = {

    // Array of listed movies
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],

    // Array of watched movies
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Access GlobalContext from other variables using provider component

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);
  
};