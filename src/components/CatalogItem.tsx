import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store";
import { addProductToCartResquest } from "../store/modules/cart/actions";
import { ProductsProps } from "../store/modules/cart/types";

interface CatalogitemProps {
  product: ProductsProps
}

function Catalogitem({ product }: CatalogitemProps) {

  //vai retornar uma funcao que permitte execultar as actions
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id)
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartResquest(product));
  }, [dispatch, product]);

  return (
    <>
      <article>
        <strong>{product.title}</strong> {" - "}
        <span>{product.title}</span> {" "}

        <button
          type="button"
          onClick={handleAddProductToCart}
        >
          Comprar
        </button>

        {hasFailedStockCheck && <span style={{ color: 'red ' }}>Falta de estoque</span>}
      </article>
    </>
  )
}

export default Catalogitem;