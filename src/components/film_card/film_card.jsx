import React from "react";
import PropTypes from "prop-types";

const filmCard = (props) => {
  const {title, imageSrc, startPreview} = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={startPreview()}>
      <button className="small-movie-card__play-btn" type="button">
        Play
      </button>
      <div className="small-movie-card__image">
        <img
          src={imageSrc}
          alt="No Country for Old Men"
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
};

filmCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  startPreview: PropTypes.func.isRequired
};

export default filmCard;
