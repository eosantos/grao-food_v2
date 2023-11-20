import React from "react";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import PaidIcon from "@mui/icons-material/Paid";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";

const CardRestaurant = ({ restaurants }) => {
  const navigate = useNavigate();

  return (
    <div>
      <C.Main>
        {restaurants &&
          restaurants.map((data) => (
            <C.CardContainer
              key={data.id}
              onClick={() => navigate(`/restaurants/${data.id}/products`)}
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
