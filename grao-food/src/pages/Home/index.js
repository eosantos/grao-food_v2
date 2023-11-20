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
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    // Seta todos os produtos    
    restaurantService.getAllProducts()
      .then((response) => {
        console.log("Dados de produtos recebidos:", response);
        setProducts(response.data); // Mostrar todos os produtos
      })
      .catch((error) => {
        console.error("Erro ao obter dados de produtos:", error);
      });
  }, []);


  const handleSearch = (searchTerm) => {
    console.log(`Buscando por: ${searchTerm}`);
    
    if (searchTerm.trim() === "") {
      // Se o termo de pesquisa estiver vazio, exiba todos os restaurantes
      setFilteredRestaurants(restaurants);
    } else {
      // Filtrar restaurantes com base no termo de pesquisa
      const searchByRestaurants = restaurants.filter(
        (restaurant) => restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
      ).map((restaurant) => restaurant.id)
      // Filtra restaurantes com base no nome dos produtos     
      const searchByProductName = products.filter(
        (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
      ).map((product) => product.restaurant_id)
      // Filtra restaurantes com base no descrição dos produtos
      const searchByProductDescription = products.filter(
        (product) => product.description.toLowerCase().includes(searchTerm.toLowerCase())
      ).map((product) => product.restaurant_id)

      const concat1 = searchByRestaurants.concat(searchByProductName) // concatena o resultado da busca por nome dos restaurantes com a busca por nome do produto
      const concat2 = concat1.concat(searchByProductDescription) // concatena o resultado da busca por descrição do produto com os resultados acima;
      const search = concat2.filter((item, index) => concat2.indexOf(item) === index); // remove os ids de restaurantes duplicados

      // Filtra os restaurantes que correspondem aos critérios acima especificados.
      const results = restaurants.filter(
        (restaurant) => search.includes(restaurant.id)
      );
      
      setFilteredRestaurants(results);
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
