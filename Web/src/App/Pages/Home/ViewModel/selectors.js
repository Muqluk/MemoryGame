import { createSelector } from 'reselect';
import { initialState } from '../Model/initialState';

const homeDomain = (state) => state.get('Home', initialState);

export const PlayersSelector = () => createSelector(
  homeDomain,
  (state) => state.toJS().Players,
);
