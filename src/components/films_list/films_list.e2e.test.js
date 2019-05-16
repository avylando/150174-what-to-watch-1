import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmsList from "./films_list.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Play button correctly handle click`, () => {
  const films = [
    {
      title: `Bohemian Rhapsody`,
      imageSrc: `img/bohemian-rhapsody.jpg`,
    },
    {
      title: `Macbeth`,
      imageSrc: `img/macbeth.jpg`,
    },
    {
      title: `Pulp Fiction`,
      imageSrc: `img/pulp-fiction.jpg`,
    },
  ];
  const filmsList = shallow(<FilmsList filmsData={films} />);
  const playButtons = filmsList.find(`.small-movie-card__play-btn`);

  playButtons.forEach((button, id) => {
    button.simulate(`click`, {preventDefault() {}});
    expect(filmsList.state.film).toMatchObject({id, title: films[id].title});
  });
});
