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
}
