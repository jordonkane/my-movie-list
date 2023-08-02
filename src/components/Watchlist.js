import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

// Display watchlist in a grid
export const Watchlist = () => {

  // Access watchlist array from GlobalContext
  const { watchlist } = useContext(GlobalContext);

  return ( // Styling
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? ( // Movie grid
          <div className="movie-grid">
            {watchlist.map((movie) => ( // Map through Watchlist
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : ( // Return if watchlist length is 0 (no movies)
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};