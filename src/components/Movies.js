import React, { useContext, Fragment } from "react";

import MovieItem from "./MovieItem";

import MovieContext from "../context/movie/movieContext";

const Movies = () => {
  const movieContext = useContext(MovieContext);

  const { movies, loading } = movieContext;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movies-container">
      {movies.length === 0 ? ( //Instead of diplaying this i can get movies from trending
        <div>Search for a movie!</div>
      ) : (
        <Fragment>
          {movies.map((movie) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default Movies;
