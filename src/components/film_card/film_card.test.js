import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film_card.jsx";

it(`FilmCard correctly renders`, () => {
  const data = {
    title: `Bohemian Rhapsody`,
    imageSrc: `img/bohemian-rhapsody.jpg`,
  };

  const tree = renderer
    .create(
        <FilmCard data={data}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
