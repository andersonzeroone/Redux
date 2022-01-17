import produce from 'immer';
import { Reducer } from "redux";
import { CartProps } from "./types";

const INITIAL_STATE: CartProps = {
  items: []
}


//todo regra de negocio deve esta dentro do reduce e nunca na actions


// criamos o reduce para controlar os estado de forma isolada ex o carrinho de compras 


//tipa a funcao para o tipo Reducer 


//state retonar o valor do estado global antes de qualquer alteracao
//actions o valor que vai ser inserido no estado

const cart: Reducer<CartProps> = (state = INITIAL_STATE, action) => {

  return produce(state, draft => {

    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(item =>
          item.product.id === product.id
        )

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1
          })
        }



        break;

        // return {
        //   ...state,
        //   items: [
        //     ...state.items,
        //     {
        //       product,
        //       quantity: 1
        //     }
        //   ]
        // }
      }
      default: {
        return draft;
      }
    }

  });
}



export default cart;