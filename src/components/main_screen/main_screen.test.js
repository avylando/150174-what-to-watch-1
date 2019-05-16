import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main_screen.jsx";

it(`MainScreen correctly renders FilmsList`, () => {
  const tree = renderer
    .create(
        <MainScreen
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
