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
        console.log('============', response.data);
        setRestaurants(response.data);
      }).catch((error) => {
        console.log(error);
    })
  }, [])

  //console.log(restaurants);
  // console.log("teste");

  // var rests = restaurants;

  // data = data
  //   .filter(function (item) {
  //     return item.id === "01";
  //   })
  //   .map(function ({ id, name }) {
  //     return { id, name };
  //   });
  // console.log(data);

  // rests = rests
  //   .filter(function (item) {
  //     return item.id === "01";
  //   })
  //   .map(function ({ name, description, stars, products }) {
  //     return { name, description, stars, products };
  //   });
  // console.log(rests);

  // var prods = rests.products.map(function ({ pratos }) {
  //   return { pratos };
  // });

  // console.log(prods);

  //pratos =

  // const ID_RESTAURANT = "01";

  // const restaurant = restaurants.find((item) => (item.id = ID_RESTAURANT));

  // console.log(restaurant);

  // const pratos = restaurant.products.pratos;

  // console.log(pratos);

  // const bebidas = restaurant.products.bebidas;

  // console.log(bebidas);

  // console.log(rests[0].products[0].pratos[0]);

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
                  <strong>{data.delivery_price}</strong>
                </C.Icons>
              </C.Description>
            </C.CardContainer>
          ))}
        </C.Main>
    </div>
  );
};

export default CardRestaurant;
