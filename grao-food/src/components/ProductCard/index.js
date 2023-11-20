import React, { useState, useEffect } from "react";
import * as C from "./styles";
import { ProductsService } from "../../services/ProductsService";

const ProductCard = ({ restaurant_id } ) => {
  const [products, setProducts] = useState([]);
  const productsService = new ProductsService();

  useEffect(() => { 
    productsService.getAll(restaurant_id)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      }).catch((error) => {
        console.log(error);
    })
  }, [])

  return (
    <div>
      <C.Title>Pratos</C.Title>
      <C.Main>
        {products &&
          products.filter((product) => product.type === 'Comida').map((data) => (
        <C.CardContainer key={data.id}>          
          <C.CardImage src={data.image_product} alt={"Imagem do Produto"} />
          <C.CardBody>
            <C.CardTitle>{data.name}</C.CardTitle>
            <C.CardDescription>{data.description}</C.CardDescription>
            <C.CardPrice>R$ {data.price.toFixed(2)}</C.CardPrice>
          </C.CardBody>
        </C.CardContainer>
        ))}
      </C.Main>
      <C.Title>Bebidas</C.Title>
      <C.Main>
        {products &&
          products.filter((product) => product.type === 'Bebida').map((data) => (
        <C.CardContainer key={data.id}>          
          <C.CardImage src={data.image_product} alt={"Imagem do Produto"} />
          <C.CardBody>
            <C.CardTitle>{data.name}</C.CardTitle>
            <C.CardPrice>R$ {data.price.toFixed(2)}</C.CardPrice>
          </C.CardBody>
        </C.CardContainer>
        ))}
      </C.Main>
    </div>
  );
};

export default ProductCard;
