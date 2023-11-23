import * as C from "./styles";

import React, { useEffect, useState } from "react";
import { RestaurantsService } from "../../services/RestaurantsService";
import CallIcon from '@mui/icons-material/Call';
import { useLocation } from "react-router-dom";

const CardRestaurantProduct = () => {
  const [restaurants, setRestaurants] = useState([]);
  const restaurantService = new RestaurantsService();

  const location = useLocation();
  const pathname = location.pathname.split('/')

  useEffect(() => { 
    restaurantService.getAll({ mode: "'no-cors"})
      .then((response) => {
        console.log(response.data);
        setRestaurants(response.data);
      }).catch((error) => {
        console.log(error);
    })
  }, [])

  return (
    <div>
      {restaurants &&
        restaurants.filter((restaurant) => restaurant.id == pathname[2]).map((data) => (
        <C.CardContainer key={restaurants}>
          <C.Image src={data.image} alt="Imagem do Card" />
          <C.Description>
            <C.Avatar src={data.avatar} alt="Avatar do autor" />
            <C.Title>
              <strong>{data.name}</strong>
              <p>{data.sub_name}</p>
            <C.label>                    
              <C.StyledIcon />{data.addresses} | <CallIcon /> {data.telefone}                     
            </C.label>
            </C.Title>
          </C.Description>
        </C.CardContainer>
      ))}
    </div>
  );
};

export default CardRestaurantProduct;
