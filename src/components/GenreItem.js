import React from "react";

const GenreItem = ({ genre }) => {
  const { id, name } = genre;

  return <div className="pill">{name}</div>;
};

export default GenreItem;
