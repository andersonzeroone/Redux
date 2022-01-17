import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/modules/cart/actions";
import { ProductsProps } from "../store/modules/cart/types";

interface CatalogitemProps {
  product: ProductsProps
}

function Catalogitem({ product }: CatalogitemProps) {

  //vai retornar uma funcao que permitte execultar as actions
  const dispatch = useDispatch();


  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
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
      </article>
    </>
  )
}

export default Catalogitem;