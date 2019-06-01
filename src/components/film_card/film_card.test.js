import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film_card.jsx";

it(`FilmCard correctly renders`, () => {
  const data = {
    title: `Bohemian Rhapsody`,
    imageSrc: `img/bohemian-rhapsody.jpg`,
    previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  };

  const tree = renderer
    .create(
        <FilmCard filmData={data}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
