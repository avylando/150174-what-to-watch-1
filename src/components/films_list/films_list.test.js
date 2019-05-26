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
              previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
              videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
            },
            {
              title: `Macbeth`,
              imageSrc: `img/macbeth.jpg`,
              previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
              videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
            }
          ]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
