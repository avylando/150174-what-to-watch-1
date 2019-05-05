import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Header correctly handle click`, () => {
  const clickHandler = jest.fn();
  const filmNames = [`Snatch`, `Interstellar`];
  const app = shallow(<App filmNames={filmNames} onClick={clickHandler} />);
  const headers = app.find(`.small-movie-card__title`);

  headers.forEach((header) => header.simulate(`click`, {preventDefault() {}}));
  expect(clickHandler).toHaveBeenCalledTimes(filmNames.length);
});
