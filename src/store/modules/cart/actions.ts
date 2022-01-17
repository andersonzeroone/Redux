import { ProductsProps } from './types';

export function addProductToCart(product: ProductsProps) {
  //type uma chave/nome de idetificacao da funcao
  //payload sao os dados que recebe

  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: { product },
  };
}
