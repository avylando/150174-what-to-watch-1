import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./videoplayer.jsx";

it(`FilmsList correctly renders FilmCards`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          filmData={
            {
              title: `Bohemian Rhapsody`,
              imageSrc: `img/bohemian-rhapsody.jpg`,
              previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
              videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
            }
          }
          isPlaying={false}
          withSound={false}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
