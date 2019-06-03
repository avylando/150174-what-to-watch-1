import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import MainScreen from "../main_screen/main_screen.jsx";

const App = (props) => {
  const {filmsData} = props;
  return <MainScreen filmsData={filmsData}/>;
};

App.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    previewSrc: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired,
  }))
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    filmsData: state.filmsList
  });
};

const mapDispatchToProps = () => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export {App};
