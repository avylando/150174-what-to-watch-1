import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main_screen/main_screen.jsx";

const App = (props) => {
  const {filmsData} = props;
  return <MainScreen filmsData={filmsData}/>;
};

App.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired
  }))
};
export default App;
