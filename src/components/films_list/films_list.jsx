import React from "react";
import PropTypes from "prop-types";

const filmsList = (props) => {
  const {} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
    </article>
  );
};

filmsList.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired
  }))
};

export default filmsList;
