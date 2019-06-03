import React from "react";
import renderer from "react-test-renderer";
import {MainScreen} from "./main_screen.jsx";

it(`MainScreen correctly renders FilmsList`, () => {
  const tree = renderer
    .create(
        <MainScreen
          filmsData={[
            {
              title: `Bohemian Rhapsody`,
              genre: `drama`,
              imageSrc: `img/bohemian-rhapsody.jpg`,
              previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
              videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
            },
            {
              title: `Macbeth`,
              genre: `drama`,
              imageSrc: `img/macbeth.jpg`,
              previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
              videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
            }
          ]}
          activeGenre={`all`}
          filterGenresHandler={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
