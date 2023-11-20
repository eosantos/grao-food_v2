import React, { useState, useEffect } from "react";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import PaidIcon from "@mui/icons-material/Paid";
import { useNavigate } from "react-router-dom";
import { RestaurantsService } from "../../services/RestaurantsService";

import * as C from "./styles";

const CardRestaurant = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const restaurantService = new RestaurantsService();

  useEffect(() => { 
    restaurantService.getAll({ mode: "'no-cors"})
      .then((response) => {
        //console.log(response.data);
        setRestaurants(response.data);
      }).catch((error) => {
        console.log(error);
    })
  }, [])


  return (
    <div>
      <C.Main>
        {restaurants &&
          restaurants.map((data) => (
            <C.CardContainer
              key={data.id}
              onClick={() => [navigate(`/restaurants/${data.id}/products`)]}
            >
              <C.Image src={data.image} alt="Imagem do Card" />
              <C.Description>
                <C.Avatar src={data.avatar} alt="Avatar do autor" />
                <C.Title>
                  <strong>{data.name}</strong>
                  <p>{data.sub_name}</p>
                </C.Title>
                <C.Icons>
                  <StarPurple500OutlinedIcon />
                  <strong>{data.stars}</strong>
                  <QueryBuilderOutlinedIcon />
                  <strong>{data.delivery_time}</strong>
                  <PaidIcon />
                  <strong>R$ 7,00</strong>
                </C.Icons>
              </C.Description>
            </C.CardContainer>
          ))}
        </C.Main>
    </div>
  );
};

export default CardRestaurant;
