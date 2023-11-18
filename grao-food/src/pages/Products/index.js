import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";
import CardRestaurantProduct from "../../components/CardRestaurantProduct";
import ProductCard from "../../components/ProductCard";
import { useLocation } from 'react-router-dom';
//import Slider from "react-slick";

import * as C from "./styles";

const Products = ({ restaurants, products }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.split('/')

  return (
    <C.Container>
      <Header />
      <CardRestaurantProduct />

      
        <ProductCard
          title="Título do Card"
          description="Descrição do Card"
          restaurant_id={Number(pathname[2])}
        />
      
      


      <Button Text="Voltar" onClick={() => [navigate("/home")]}>
        Voltar
      </Button>
    </C.Container>
  );
};

export default Products;
