import {reducer, ActionCreators} from "./reducer";

it(`Should return initial state`, () => {
  const initState = {genre: `comedy`, filmsList: []};
  expect(reducer(initState, {})).toEqual(initState);
});

it(`Should change genre`, () => {
  const initState = {genre: `comedy`, filmsList: []};
  expect(reducer(initState, ActionCreators[`FILTER_BY_GENRE`](`drama`))).toEqual({
    genre: `drama`,
    filmsList: []
  });
});

it(`Should reset state`, () => {
  const initState = {
    genre: `drama`,
    filmsList: []
  };

  expect(reducer(initState, ActionCreators[`RESET_FILTER`]()).genre).toEqual(`all`);
});
