import React from "react";

const GenreItem = ({ genre }) => {
  const { name } = genre;

  return <div className="pill">{name}</div>;
};

export default GenreItem;
