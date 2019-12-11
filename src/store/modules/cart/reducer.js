import produce from 'immer';

export default function cart(state = [], action) {
  // esse switch vai garantir que o reducer do carrinho, escute somente o 'ADD_TO_CART'
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      // Caso seja um ADD_TO_CART, vai pegar todo o state atual e add dentro do carrinho e um product ao final
      return produce(state, draft => {
        // todas alterações feitas aqui, serão refletidas no state
        // verificando se o produto add é repetido, para somar a quantidade e não add como se fosse outro produto
        const productIndex = draft.findIndex(p => p.id === action.product.id);
        if (productIndex >= 0) {
          // verificando se um item existe dentro de um array, se existir ele vai somar como o que ja tem add ao carrinho
          draft[productIndex].amount += 1;
        } else {
          // se não, add um novo produto
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });

    // removendo produto do carrinho
    case '@cart/REMOVE':
      return produce(state, draft => {
        // encontrando produto por id
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    // alteração quantidade de produtos no carrinho
    case '@cart/UPDATE_AMOUNT': {
      return produce(state, draft => {
        if (action.amount <= 0) {
          return state;
        }
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      // Caso ele receba um ação que não seja do tipo 'ADD_TO_CART' será devolvido o state sem nenhuma alteração
      return state;
  }
}
