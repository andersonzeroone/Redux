import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux';
import { CartProps } from './modules/cart/types';

import createSagaMiddleware from 'redux-saga';

import rootReduce from './modules/rootReduce';
import rootSaga from './modules/rootSaga';

export interface IState {
  cart: CartProps;
}

const sagaMiddlewares = createSagaMiddleware();

const middlewares = [sagaMiddlewares];

//criando o estado global da aplicação (store)
const store = createStore(
  rootReduce,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);


sagaMiddlewares.run(rootSaga)

export default store;