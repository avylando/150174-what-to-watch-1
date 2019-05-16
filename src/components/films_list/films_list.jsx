import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film_card/film_card.jsx";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filmCard: {}
    };

    this.props = props;
  }

  render() {
    const {filmsData} = this.props;

    return (
      <div className="catalog__movies-list">
        {filmsData.map((filmData, index) => {
          const {title, imageSrc} = filmData;
          return (
            <FilmCard
              title={title}
              imageSrc={imageSrc}
              startPreview={() => {
                this.setState({
                  filmCard: {id: index, title}
                });
              }}
              key={`card` + index}
            />
          );
        })}
      </div>
    );
  }
}

FilmsList.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired
  }))
};

export default FilmsList;
