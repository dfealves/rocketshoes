export function addToCart(product) {
  return {
    type: '@cart/ADD', // obrigatorio passar o type da action
    product, // produtos que será adicionado ao carrinho
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
