import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import MovieDetails from "./components/MovieDetails";

import "./styles.css";

import MovieState from "./context/movie/MovieState";

const App = () => {
  return (
    <MovieState>
      <Router>
        <Route exact path="/">
          <div className="container">
            <Navbar />
            <Home />
          </div>
        </Route>
        <Route exact path="/movie/:id" component={MovieDetails} />
      </Router>
    </MovieState>
  );
};

export default App;
