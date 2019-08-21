/*
  eslint-disable
    no-console,
*/
import { Actions } from './actions';
import { initialState } from './initialState';

export const Reducer = (state = initialState, { payload = {}, type = {} }) => {
  switch (type) {
    case Actions.AddPlayer: {
      let newState = state;
      console.log('Adding Player!', payload);
      newState = newState.set('Players', payload);
      return newState;
    }
    case Actions.RemovePlayer: {
      console.log('removing player!', payload);
      return state;
    }
    default:
      return state;
  }
};
