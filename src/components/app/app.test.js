import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import renderer from "react-test-renderer";

import {App} from "./app.jsx";
import {reducer} from "../../reducer";

it(`App correctly renders MainScreen`, () => {
  const currentStore = createStore(reducer);

  const tree = renderer
    .create(<Provider store={currentStore}>
      <App
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
          },
          {
            title: `Pulp Fiction`,
            genre: `crime`,
            imageSrc: `img/pulp-fiction.jpg`,
            previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
            videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          },
        ]}
      />
    </Provider>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
