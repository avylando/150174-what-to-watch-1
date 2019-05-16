import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films_list.jsx";

it(`FilmsList correctly renders FilmCards`, () => {
  const tree = renderer
    .create(
        <FilmsList
          filmsData={[
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
            }
          ]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
