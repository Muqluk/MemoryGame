import { all, call, put, select, takeLatest } from 'redux-saga/effects'; // eslint-disable-line

import * as selector from './selectors';
import * as actions from '../Model/actions';
import { Constants } from '../Model/constants';

// function* watchNewGameAsync() {
//   try {
//     // const products = yield select(selector.makeSelectProducts());
//     // const response = yield call(
//     // api.gridApiRequest,
//     // products.apiRequestParams
//     // );
//     // yield put(actions.NewGame());
//   } catch (ex) {
//     // yield put(action.fetchProductsFailed(ex));
//   }
// }

export default function* gamePageSaga() {
  yield all([
    // watchNewGameAsync(),
  ]);
}

/*
  function* fetchPlayers() {
   try {
     const products = yield select(selector.makeSelectProducts());
     const response = yield call(
       api.gridApiRequest,
       products.apiRequestParams
     );
     yield put(action.fetchProductsSucceeded(response));
     yield put(action.);
   } catch (ex) {
     yield put(action.fetchProductsFailed(ex));
   }
  }

  function* watchFetchProductsAsync() {
    yield takeLatest(constant.PRODUCTS_SEARCH_FETCH, fetchProductsAsync);
  }
*/
