import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film_card.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Play button correctly handle click`, () => {
  const film =
    {
      title: `Pulp Fiction`,
      imageSrc: `img/pulp-fiction.jpg`,
    };

  const clickHandler = jest.fn();
  const filmCard = shallow(<FilmCard data={film} playFilm={clickHandler} />);
  const playButton = filmCard.find(`.small-movie-card__play-btn`);

  playButton.simulate(`click`, {preventDefault() {}});
  expect(clickHandler.mock.calls[0][0]).toMatchObject(film);
});
