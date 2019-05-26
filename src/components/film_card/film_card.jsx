import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../videoplayer/videoplayer.jsx";

class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      whatShowed: `image`
    };

    this._previewDelay = 1000;
    this._cardImage = React.createRef();

    this._previewStartHandler = this._previewStartHandler.bind(this);
    this._previewEndHandler = this._previewEndHandler.bind(this);
  }

  render() {
    const {filmData, cardHoverHandler} = this.props;
    const {title, imageSrc} = filmData;
    const {whatShowed} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          cardHoverHandler(filmData);
          this._previewStartHandler();
        }}
        onMouseLeave={() => {
          this._previewEndHandler();
        }}
      >
        <div
          className="small-movie-card__image"
          ref={this._cardImage}
          style={{zIndex: whatShowed === `image` ? 1 : -1}}
        >
          <img src={imageSrc} alt={title} width="280" height="175" />
        </div>
        <VideoPlayer
          filmData={filmData}
          isPreview={true}
          isPlaying={whatShowed === `video`}
          previewStartHandler={this._previewStartHandler}
          previewEndHandler={this._previewEndHandler}
        />
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">
            {title}
          </a>
        </h3>
      </article>
    );
  }

  _previewStartHandler() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }

    this._timeout = setTimeout(() => {
      this.setState({whatShowed: `video`});
    }, this._previewDelay);
  }

  _previewEndHandler() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }

    this.setState({whatShowed: `image`});
  }
}

FilmCard.propTypes = {
  filmData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    previewSrc: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired,
  }),
  cardHoverHandler: PropTypes.func,
};

export default FilmCard;
