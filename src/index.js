import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";
import films from "./mocks/films.js";
import {reducer} from "./reducer";

const currentStore = createStore(reducer);

const init = (store) => {
  ReactDOM.render(<Provider store={store}>
    <App filmsData={films} />
  </Provider>,
  document.querySelector(`#root`));
};

init(currentStore);
