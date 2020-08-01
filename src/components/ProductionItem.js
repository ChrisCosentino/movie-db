import React, { Fragment } from "react";

const ProductionItem = ({ production }) => {
  const { id, logo_path, name, origin_country } = production;

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
