const initialState = {
  genre: `all`,
  filmsList: [
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
    {
      title: `Revenant`,
      genre: `thriller`,
      imageSrc: `img/revenant.jpg`,
      previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      title: `Snatch`,
      genre: `comedy`,
      imageSrc: `img/snatch.jpg`,
      previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      title: `Aviator`,
      genre: `documentary`,
      imageSrc: `img/aviator.jpg`,
      previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      title: `Johnny English`,
      genre: `comedy`,
      imageSrc: `img/johnny-english.jpg`,
      previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
  ]
};

const ActionCreators = {
  'FILTER_BY_GENRE': (genre) => {
    return {
      type: `FILTER_BY_GENRE`,
      payload: genre
    };
  },

  'GET_GENRE_FILMS': (genre) => {
    let filmsList = [];

    if (genre === `all`) {
      filmsList = initialState.filmsList;
    } else {
      filmsList = initialState.filmsList.filter((film) => film.genre === genre);
    }

    return {
      type: `GET_GENRE_FILMS`,
      payload: filmsList
    };
  },

  'RESET_FILTER': () => {
    return {
      type: `RESET_FILTER`,
      payload: ``
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `FILTER_BY_GENRE`:
      return Object.assign({}, state, {
        genre: action.payload
      });

    case `GET_GENRE_FILMS`:
      return Object.assign({}, state, {
        filmsList: action.payload
      });

    case `RESET_FILTER`: return initialState;
  }

  return state;
};

export {reducer, ActionCreators};
