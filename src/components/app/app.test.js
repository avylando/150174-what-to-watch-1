import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`App correctly renders MainScreen`, () => {
  const tree = renderer
    .create(
        <App
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
