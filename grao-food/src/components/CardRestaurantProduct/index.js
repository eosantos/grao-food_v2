import React from "react";
import bgrestaurant from "../../assets/bgrestaurant001.png";
//import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import avatar from "../../assets/avatar001.png";

import * as C from "./styles";


const CardRestaurant = ({ imageSrc, avatarSrc, title, description }) => {
  return (
    <C.CardContainer>
      <C.Image src={bgrestaurant} alt="Imagem do Card" />
      <C.Description>
        <C.Avatar src={avatar} alt="Avatar do autor" />
        <C.Title>
          <strong>Restaurant</strong>
          <p>Comida brasileira</p>
        <C.label>                    
           <C.StyledIcon />Av. Leopoldinho de Oliveira                      
        </C.label>
        </C.Title>
      </C.Description>
    </C.CardContainer>
  );
};

export default CardRestaurant;
