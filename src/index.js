import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const names = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
  ReactDOM.render(<App filmNames={names} />, document.querySelector(`#root`));
};

init();
