import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";


// Add some nice formatting for the movies

export const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  // Check arrays for movies
  let storedMovie = watchlist.find((o) => o.id === movie.id); // Check if movie is in watchlist
  let storedMovieWatched = watched.find((o) => o.id === movie.id); // Check if movie is in watched

  // Disable button if movie is stored
  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  // Disable button if movie is watched
  const watchedDisabled = storedMovieWatched ? true : false;

  return ( // Styling & buttons
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? ( // Create an image element
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : ( // Return if there is no poster
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};