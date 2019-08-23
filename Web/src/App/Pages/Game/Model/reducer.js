/*
  eslint-disable
    no-console,
*/
import { Actions } from './actions';
import { initialState } from './initialState';

export const Reducer = (state = initialState, { payload = {}, type = {} }) => {
  console.log(type);
  switch (type) {
    case Actions.NEW_GAME: {
      let newState = state;
      console.log('New Game Requested', payload);
      newState = newState.set('Cards', []);
      return newState;
    }
    default:
      return state;
  }
};
