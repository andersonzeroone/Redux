import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import api from "../services/api";

import { ProductsProps } from "../store/modules/cart/types";
import Catalogitem from "./CatalogItem";

function Catalog() {


  //recene uma funcao como paramentro e retorna algo
  // const store = useSelector(state => state)

  const [catalogo, setCatalogo] = useState<ProductsProps[]>([]);


  useEffect(() => {
    api.get('products').then(res => {
      setCatalogo(res.data);
    });

  }, []);


  return (
    <main>
      <h1>Catalog</h1>

      {catalogo.map(product => (
        <Catalogitem
          key={product.id}
          product={product}
        />
      ))}
    </main>

  );
}

export default Catalog;