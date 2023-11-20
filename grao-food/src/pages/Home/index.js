import * as C from "./styles";

import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import Header from "../../components/Header";
import CardRestaurant from "../../components/CardRestaurant";
import Button from "../../components/Button";
import Search from "../../components/Search";
import useAuth from "../../hooks/useAuth";
import { RestaurantsService } from "../../services/RestaurantsService";


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const restaurantService = new RestaurantsService();

  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // Carregue todos os restaurantes quando a página for carregada
    restaurantService.getAll()
      .then((response) => {
        console.log("Dados de restaurantes recebidos:", response);
        setRestaurants(response.data);
        setFilteredRestaurants(response.data); // Mostrar todos os restaurantes inicialmente
      })
      .catch((error) => {
        console.error("Erro ao obter dados de restaurantes:", error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    console.log(`Buscando por: ${searchTerm}`);
    
    if (searchTerm.trim() === "") {
      // Se o termo de pesquisa estiver vazio, exiba todos os restaurantes
      setFilteredRestaurants(restaurants);
    } else {
      // Filtrar restaurantes com base no termo de pesquisa
      const search = restaurants.filter(
        (restaurant) => restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRestaurants(search);
    }
  };

  const handleRestaurantClick = (restaurant_id) => {
    navigate(`/restaurants/${restaurant_id}/products`);
  };
  
  return (
    <C.Container>
      <Header />
      <Search onSearch={handleSearch} />
     
      <CardRestaurant
        title="Título do Card"
        description="Descrição do Card"
        restaurants={filteredRestaurants}                
        onClick={(restaurant_id) => handleRestaurantClick(restaurant_id)}
      />                      

      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>

    </C.Container>
  );
};

export default Home;
