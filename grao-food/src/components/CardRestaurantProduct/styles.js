import styled from "styled-components";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";

export const CardContainer = styled.div`
  width: 100vw;
  height: 250px;
  border-radius: 0px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

export const Description = styled.div`
  width: 100%;
  height: 50%;
  background-color: #fff;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-bottom: 130px;

  -webkit-box-shadow: 0px 9px 7px -6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 9px 7px -6px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 9px 7px -6px rgba(0, 0, 0, 0.16);
`;

export const Title = styled.strong`
  font-size: 20px;
  margin: 10px 100px 50px 15px;
  font-wight: 400;
  text-align: left;

  p {
    font-size: 14px;
    font-wight: 100;
    margin-top: 3px;
  }

  @media (max-width: 400px) {
    font-size: 18px;
    p {
      font-size: 12px;     
    }
  }
`;

export const label = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-wight: 300;
    color: #8cc63f;
    margin-top: 8px;
  }

  @media (max-width: 400px) {
    font-size: 9px;
  }
`;

export const StyledIcon = styled(RoomOutlinedIcon)`
  font-size: 10px;  
`;
