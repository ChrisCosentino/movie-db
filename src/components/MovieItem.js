import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  return (
    <Link to={`movie/${movie.id}`} className="movie-item-container">
      <img
        className="preview-img"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.original_title}
      />
    </Link>
  );
};

export default MovieItem;
