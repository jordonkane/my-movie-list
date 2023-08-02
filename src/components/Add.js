import React, { useState } from "react"; // Allows us to create a state inside a functional component
import { ResultCard } from "./ResultCard";

export const Add = () => {

  // Query state
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Tell the component what to do when the value is changed
  const onChange = (e) => {
    e.preventDefault();

    // Set the state equal to the value
    setQuery(e.target.value);

    // Send a search request to the movie database API
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (

    /*
      Styling & input for searching movies
    */

    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && ( // Check for results
            <ul className="results">
              {results.map((movie) => ( // Map through results, give each movie a unique key
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};