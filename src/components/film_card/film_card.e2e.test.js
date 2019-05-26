import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film_card.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Play button correctly handle click`, () => {
  const film =
    {
      title: `Macbeth`,
      imageSrc: `img/macbeth.jpg`,
      previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    };

  const hoverHandler = jest.fn();
  const filmCard = shallow(<FilmCard filmData={film} cardHoverHandler={hoverHandler} />);
  // const playButton = filmCard.find(`.small-movie-card__play-btn`);

  filmCard.simulate(`mouseenter`, {preventDefault() {}});
  expect(hoverHandler.mock.calls[0][0]).toMatchObject(film);
});
