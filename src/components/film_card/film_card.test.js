import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film_card.jsx";

it(`FilmCard correctly renders`, () => {
  const tree = renderer
    .create(
        <FilmCard title={`Bohemian Rhapsody`} imageSrc={`img/bohemian-rhapsody.jpg`}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
