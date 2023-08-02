import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watched = () => {

  // Import watched movies
  const { watched } = useContext(GlobalContext);

  return ( 
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watched.length > 0 ? ( // Movie grid
          <div className="movie-grid">
            {watched.map((movie) => ( // Map through watched
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : ( // Return if array length is 0 (no movies)
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};