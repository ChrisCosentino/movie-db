import React, { useReducer } from "react";
import axios from "axios";

import MovieContext from "./movieContext";
import MovieReducer from "./movieReducer";

import { GET_MOVIE, SEARCH_MOVIES, SET_LOADING } from "../types";

let movieDbApiKey;

if (process.env.NODE_ENV !== "production") {
  movieDbApiKey = process.env.REACT_APP_MOVIEDB_API_KEY;
  console.log("not in production build");
} else {
  movieDbApiKey = process.env.MOVIEDB_API_KEY;
  console.log("in production build");
}

const MovieState = (props) => {
  const initialState = {
    movies: [],
    movie: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  // Search movies
  const searchMovies = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${movieDbApiKey}&language=en-US&query=${text}&page=1&include_adult=false`
    );

    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data.results,
    });
  };

  // Get movie
  const getMovie = async (movieId) => {
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${movieDbApiKey}&language=en-US`
    );

    dispatch({
      type: GET_MOVIE,
      payload: res.data,
    });
  };

  // Set Loading
  const setLoading = () =>
    dispatch({
      type: SET_LOADING,
    });

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        loading: state.loading,
        searchMovies,
        getMovie,
        setLoading,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
