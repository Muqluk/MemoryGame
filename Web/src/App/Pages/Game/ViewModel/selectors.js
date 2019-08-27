import { createSelector } from 'reselect';
import { initialState } from '../Model/initialState';

const gameDomain = (state) => {
  const game = state.get('Game', initialState).toJS().Game;
  return game;
};

const GameSelectors = {
  GameConfig: () => createSelector(
    gameDomain,
    (game) => game.Config,
  ),
  GameCards: () => createSelector(
    gameDomain,
    (game) => game.CurrentGame.Cards,
  ),
  CurrentGame: () => createSelector(
    gameDomain,
    (game) => game.CurrentGame,
  ),
};

export default GameSelectors;
