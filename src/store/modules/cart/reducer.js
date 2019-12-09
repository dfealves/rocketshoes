export default function cart(state = [], action) {
  // esse switch vai garantir que o reducer do carrinho, escute somente o 'ADD_TO_CART'
  switch (action.type) {
    case 'ADD_TO_CART':
      // Caso seja um ADD_TO_CART, vai pegar todo o state atual e add dentro do carrinho e um product ao final
      return [...state, action.product];
    default:
      // Caso ele receba um ação que não seja do tipo 'ADD_TO_CART' será devolvido o state sem nenhuma alteração
      return state;
  }
}
