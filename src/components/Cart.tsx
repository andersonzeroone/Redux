import { useSelector } from "react-redux";
import { IState } from "../store";
import { CartItemsProps } from "../store/modules/cart/types";

function Cart() {
  //combineReducers ta tipando o retorno da funcao
  const cart = useSelector<IState, CartItemsProps[]>(state => state.cart.items);




  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantdade</th>
          <th>SubTotal</th>
        </tr>
      </thead>

      <tbody>
        {cart.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Cart;