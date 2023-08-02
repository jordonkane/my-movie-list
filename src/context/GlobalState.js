import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Initial value of the store
const initialState = {

    // Array of listed movies
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist")) // Return JSON.parse if there's a local storage variable
    : [], // Otherwise return an empty array

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

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // Actions
  const addMovieToWatchlist = (movie) => { // Add movie to watchlist
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie }); // Filter through array
  };

  const removeMovieFromWatchlist = (id) => { // Remove movie from watchlist
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id }); // Filter through array
  };

  const addMovieToWatched = (movie) => { // Add movie to watched
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie }); // Filter through array
  };

  const moveToWatchlist = (movie) => { // Move movie to watched
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie }); // Filter through array
  };

  const removeFromWatched = (id) => { // Remove movie from watched
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id }); // Filter through array
  };

  return (
    <GlobalContext.Provider
      value={{ // Give access to watched, watchlist, and crud operations
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};