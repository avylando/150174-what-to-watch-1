import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`App correctly renders cards`, () => {
  const tree = renderer
    .create(
        <App
          filmNames={[
            `Snatch`,
            `Fantastic Beasts`,
            `Bohemian Rhapsody`,
            `Macbeth`
          ]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
