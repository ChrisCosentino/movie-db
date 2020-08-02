import React, { useContext, Fragment, useRef, useEffect } from "react";

import MovieItem from "./MovieItem";

import MovieContext from "../context/movie/movieContext";
import gsap from "gsap";

const Movies = () => {
  const movieContext = useContext(MovieContext);

  const moviesRef = useRef(null);

  const { movies, loading } = movieContext;

  useEffect(() => {
    gsap.from(moviesRef.current, {
      y: 900,
      ease: "rough",
      duration: 1,
      delay: 0.4,
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movies-container" ref={moviesRef}>
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
