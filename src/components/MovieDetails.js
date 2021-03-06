import React, { useContext, useEffect, Fragment, useRef } from "react";

import { Link } from "react-router-dom";

import MovieContext from "../context/movie/movieContext";
import GenreItem from "./GenreItem";
import ProductionItem from "./ProductionItem";

import gsap from "gsap";

const MovieDetails = ({ match }) => {
  const movieContext = useContext(MovieContext);

  const { getMovie, loading, movie } = movieContext;

  const closeRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    getMovie(match.params.id);

    gsap.from(detailsRef.current, {
      y: 900,
      ease: "rough",
      duration: 1,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    // original_title,
    // adult,
    backdrop_path,
    budget,
    genres,
    // homepage,
    // original_language,
    overview,
    // popularity,
    // poster_path,
    production_companies,
    // production_countries,
    status,
    release_date,
    runtime,
    revenue,
    tagline,
    title,
    // video,
    // vote_average,
    // vote_count,
  } = movie;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/" className="close-btn" ref={closeRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </Link>

      <div className="landing-container">
        <img
          className="backdrop-img"
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt=""
        />
        <div className="movie-title-container">
          <h1 className="movie-title">{title}</h1>
          <span className="tagline">{tagline}</span>
        </div>
      </div>

      <div className="details-container" ref={detailsRef} id="details">
        <div className="overview-section section">
          <h1 className="section-title">Overview</h1>
          <p className="overview-text">{overview}</p>
        </div>

        <div className="details-section details">
          <h1 className="section-title">Details</h1>
          <div className="detail">
            <span className="detail-name">Budget</span>
            <span className="detail-value">{`$ ${Number(
              budget
            ).toLocaleString()}`}</span>
          </div>
          <div className="detail">
            <span className="detail-name">Revenue</span>
            <span className="detail-value">{`$ ${Number(
              revenue
            ).toLocaleString()}`}</span>
          </div>
          <div className="detail">
            <span className="detail-name">Status</span>
            <span className="detail-value">{status}</span>
          </div>
          <div className="detail">
            <span className="detail-name">Release Date</span>
            <span className="detail-value">{release_date}</span>
          </div>
          <div className="detail">
            <span className="detail-name">Runtime</span>
            <span className="detail-value">{runtime} mins</span>
          </div>
        </div>

        <div className="production-container">
          <h1 className="section-title">Production Countries</h1>
          <div className="productions">
            {production_companies !== undefined && (
              <Fragment>
                {production_companies.map((production) => (
                  <ProductionItem production={production} key={production.id} />
                ))}
              </Fragment>
            )}
          </div>
        </div>

        <div className="genres-container">
          <h1 className="section-title">Genres</h1>
          <div className="pill-section">
            {genres !== undefined && (
              <Fragment>
                {genres.map((genre) => (
                  <GenreItem genre={genre} key={genre.id} />
                ))}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
