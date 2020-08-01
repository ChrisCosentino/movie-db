import React, { useState, useContext } from "react";

import MovieContext from "../context/movie/movieContext";

const Search = () => {
  const movieContext = useContext(MovieContext);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // movie context search movies(text)
    movieContext.searchMovies(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <h1 className="explore-title">Explore</h1>
      <div className="search-field">
        <input
          className="search-text"
          type="text"
          onChange={handleChange}
          name="text"
          placeholder="Search movies..."
          value={text}
        />
        <button type="submit" className="search-btn btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Search;
