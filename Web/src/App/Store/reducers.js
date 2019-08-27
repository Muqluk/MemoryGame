import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE, connectRouter } from 'connected-react-router';

import { Reducer as HomeReducer } from '../Pages/Home/Model/reducer';
import { Reducer as GameReducer } from '../Pages/Game/Model/reducer';

const routeInitialState = fromJS({
  location: null,
});

export function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

export default function createReducer(injectedReducers, history) {
  return combineReducers({
    // router: routeReducer,
    router: connectRouter(history),
    Home: HomeReducer,
    Game: GameReducer,
    ...injectedReducers,
  });
}
