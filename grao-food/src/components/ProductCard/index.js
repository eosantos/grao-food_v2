import React, { useState, useEffect } from "react";
import * as C from "./styles";
import { ProductsService } from "../../services/ProductsService";

//import { useNavigate } from "react-router-dom";

const ProductCard = ({ imageUrl, title, description, price, restaurants }) => {
  //const navigate = useNavigate();
  
  const [products, setProducts] = useState([]);
  const productsService = new ProductsService();
  console.log(products);

  useEffect(() => { 
    productsService.getAll({ mode: "'no-cors"})
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      }).catch((error) => {
        console.log(error);
    })
  }, [])
  
  return (
    <div>
      <C.Main>
        {products &&
          products.map((data) => (
        <C.CardContainer>
          {/* <C.CardImage src={imageUrl} alt={title} />
          <C.CardBody>
            <C.CardTitle>{title}</C.CardTitle>
            <C.CardDescription>{description}</C.CardDescription>
            <C.CardPrice>{price}</C.CardPrice>
          </C.CardBody> */}
              <C.CardImage src={data.imageProduct} alt={"Imagem do Produto"} />
              <C.CardBody>
                <C.CardTitle>{data.id}</C.CardTitle>
                <C.CardDescription>{data.nameProduct}</C.CardDescription>
                <C.CardPrice>{data.priceProduct}</C.CardPrice>
              </C.CardBody>
        </C.CardContainer>
        ))}
      </C.Main>
    </div>
  );
};

export default ProductCard;
