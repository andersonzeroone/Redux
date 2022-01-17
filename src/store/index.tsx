import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux';
import { CartProps } from './modules/cart/types';

import rootReduce from './modules/rootReduce';

export interface IState {
  cart: CartProps;
}

//criando o estado global da aplicação (store)
const store = createStore(
  rootReduce,
  composeWithDevTools()
);

export default store;