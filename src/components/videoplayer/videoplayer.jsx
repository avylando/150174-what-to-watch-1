import React from "react";
import PropTypes from "prop-types";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      percentProgress: 0,
      withSound: props.withSound,
      isPlaying: props.isPlaying,
      isLoading: true,
      hasSound: false
    };

    this._videoRef = React.createRef();

    this._playButtonHandler = this._playButtonHandler.bind(this);
  }

  render() {
    const {filmData, isPreview = false} = this.props;
    const {title, imageSrc, previewSrc, videoSrc} = filmData;
    const {progress, percentProgress, isPlaying} = this.state;

    if (isPreview) {
      this.setState({isPlaying: this.props.isPlaying});
    }

    return (
      <React.Fragment>
        <div className="player"
          style={{zIndex: (isPreview && !isPlaying) ? -1 : 1}}
        >
          <video
            ref={this._videoRef}
            src={ isPreview ? previewSrc : videoSrc}
            className="player__video" poster={imageSrc}
          />

          <button type="button" className="player__exit" style={{display: isPreview ? `none` : `block`}}>Exit</button>

          <div className="player__controls" style={{display: isPreview ? `none` : `block`}}>
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={percentProgress} max="100"></progress>
                <div className="player__toggler" style={{left: `${percentProgress}%`}}>Toggler</div>
              </div>
              <div className="player__time-value">{progress}</div>
            </div>

            <div className="player__controls-row">
              <button type="button" className="player__play" onClick={this._playButtonHandler}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <div className="player__name">{title}</div>

              <button type="button" className="player__full-screen">
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const video = this._videoRef.current;

    if (video) {
      video.muted = !this.state.withSound;
      video.oncanplaythrough = () => {
        this.setState({
          isLoading: false,
        });
      };

      video.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      video.onpause = () => {
        this.setState({
          isPlaying: false,
        });
      };

      video.ontimeupdate = () => {
        this.setState({
          progress: video.currentTime,
          percentProgress: (video.duration / 100) * video.currentTime
        });
      };
    }
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {isPreview} = this.props;

    if (this.state.isPlaying) {
      video.play();
    } else {
      if (isPreview) {
        video.currentTime = 0;
      } else {
        video.pause();
      }
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
  }

  _playButtonHandler() {
    const {playButtonHandler} = this.props;
    if (playButtonHandler) {
      playButtonHandler();
    }

    this.setState({isPlaying: !this.state.isPlaying});
  }
}

VideoPlayer.propTypes = {
  filmData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string,
    previewSrc: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired,
  }),
  isPreview: PropTypes.bool,
  isPlaying: PropTypes.bool.isRequired,
  withSound: PropTypes.bool.isRequired,
  playButtonHandler: PropTypes.func,
};

export default VideoPlayer;
