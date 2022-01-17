export enum ActionTypes {
  addProductToCartResquest = 'ADD_PRODUCT_TO_CART_RESQUEST',
  addProductToCartSuccess = ' ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
}

export interface ProductsProps {
  id: number;
  title: number;
  price: number;
}

export interface CartItemsProps {
  product: ProductsProps;
  quantity: number;
}

export interface CartProps {
  items: CartItemsProps[];
  failedStockCheck: number[];
}
