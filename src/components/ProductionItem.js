import React, { Fragment } from "react";

const ProductionItem = ({ production }) => {
  const { logo_path, name } = production;

  return (
    <Fragment>
      <img
        className="production-img"
        src={`https://image.tmdb.org/t/p/original/${logo_path}`}
        alt={name}
      />
    </Fragment>
  );
};

export default ProductionItem;
