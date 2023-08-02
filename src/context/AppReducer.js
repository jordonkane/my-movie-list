/*
    The AppReducer describes how the state is transfers into the next state.
    Tells the store what to do with the data when something has happened.
*/

export default (state, action) => {
  switch (action.type) { // Tell the reducer how to change the state with 'action'
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        // Add movie to watch list
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return { 
        // Remove movie from watchlist
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TO_WATCHED":
      return {
        // Remove movie from watchlist
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        // AND add movie to watched
        watched: [action.payload, ...state.watched],
      };
    case "MOVE_TO_WATCHLIST":
      return {
        // Remove movie from watched
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        // Add movie to watchlist
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        // Remove movie from watched
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};