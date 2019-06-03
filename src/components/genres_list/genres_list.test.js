import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres_list.jsx";

it(`GenresList correctly renders`, () => {
  const genres = [`all`, `comedy`, `drama`];

  const tree = renderer
    .create(
        <GenresList genres={genres} filterGenresHandler={() => {}}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
