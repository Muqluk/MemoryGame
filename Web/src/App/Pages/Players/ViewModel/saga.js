import { all, call, put, select, takeLatest } from 'redux-saga/effects'; // eslint-disable-line

import * as action from '../Model/actions';
import * as selector from './selectors';
import * as constant from '../Model/constants';

// function* fetchPlayers() {
//  try {
//    const products = yield select(selector.makeSelectProducts());
//    const response = yield call(
//      api.gridApiRequest,
//      products.apiRequestParams
//    );
//    yield put(action.fetchProductsSucceeded(response));
//    yield put(action.);
//  } catch (ex) {
//    yield put(action.fetchProductsFailed(ex));
//  }
// }

function* watchFetchProductsAsync() {
  // yield takeLatest(constant.PRODUCTS_SEARCH_FETCH, fetchProductsAsync);
}

export default function* productsPageSaga() {
  yield all([
    watchFetchProductsAsync(),
  ]);
}
