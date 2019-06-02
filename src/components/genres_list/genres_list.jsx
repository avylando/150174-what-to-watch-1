import React from "react";
import PropTypes from "prop-types";

class GenresList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeGenre: props.activeGenre
    };

    this._genreClickHandler = this._genreClickHandler.bind(this);
  }

  render() {
    const {genres, filterGenresHandler} = this.props;

    return (<ul className="catalog__genres-list">
      {genres.map((genre, index) => {
        return <li
          className={`catalog__genres-item ${this.state.activeGenre === genre ? `catalog__genres-item--active` : ``}`}
          key={`genre_item-${index}`}>
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              filterGenresHandler(genre);
              this._genreClickHandler(genre);
            }
            }
          >{genre.charAt(0).toUpperCase() + genre.slice(1) + (genre === `all` ? ` genres` : ``)}</a>
        </li>;
      })}
    </ul>
    );
  }

  _genreClickHandler(genre) {
    this.setState({
      activeGenre: genre
    });
  }
}

GenresList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterGenresHandler: PropTypes.func.isRequired
};

export default GenresList;
