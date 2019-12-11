export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST', // obrigatorio passar o type da action
    id, // produtos que será adicionado ao carrinho
  };
}

export function addToCartSucess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
