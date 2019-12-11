import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCartSucess } from './actions';
// function* o * é como se fosse um async
function* addToCart({ id }) {
  // essa função ficará ouvindo quando o usuário add um produto ao carrinho
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSucess(response.data));
}

export default all([
  // takeLatest(), se o usuário der um segundo click para add um produto antes do primeiro ter sido devolvido da api, será considerado apenas o segundo click e o produto será cadastrado somente uma vez
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);
