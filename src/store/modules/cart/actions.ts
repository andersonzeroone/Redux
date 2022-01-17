import { ActionTypes, ProductsProps } from './types';

export function addProductToCartResquest(product: ProductsProps) {
  return {
    type: ActionTypes.addProductToCartResquest,
    payload: { product },
  };
}

export function addProductToCartSuccess(product: ProductsProps) {
  //type uma chave/nome de idetificacao da funcao
  //payload sao os dados que recebe

  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: { product },
  };
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: { productId },
  };
}
