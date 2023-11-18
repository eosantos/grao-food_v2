import * as C from "./styles";
import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import Header from "../../components/Header";
import CardRestaurant from "../../components/CardRestaurant";
import Button from "../../components/Button";
import Search from "../../components/Search";
import useAuth from "../../hooks/useAuth";
import restaurants from "../../utils/dataRestaurant";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState([]);  


  const handleSearch = (searchTerm) => {
    // Execute a busca com o termo de pesquisa
    console.log(`Buscando por: ${searchTerm}`);
    const search = restaurants.filter(
      (restaurant) => restaurant.name === searchTerm
    );
    console.log(search);
    setData(
      restaurants.filter((restaurant) => restaurant.name.includes(searchTerm))
    );
  };

  if (data.length === 0) {
    setData(restaurants);

  }
  
  //const history = useNavigate()

  const handleRestaurantClick = (restaurant_id) => {
    // Redirecionar para a página de produtos com o ID do restaurante
    navigate(`/restaurants/${restaurant_id}/products`);
  };
  

  return (
    <C.Container>
      <Header />
      <Search onSearch={handleSearch} />
     
      <CardRestaurant
        title="Título do Card"
        description="Descrição do Card"
        restaurants={data}                
        onClick={(restaurant_id) => handleRestaurantClick(restaurant_id)}
      />                      

      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>

    </C.Container>
  );
};

export default Home;
