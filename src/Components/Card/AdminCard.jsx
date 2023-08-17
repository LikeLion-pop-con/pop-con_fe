import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Typo from "../../assets/Typo";
import Margin from "../Margin/Margin";
import NewJeans from "../../assets/Icons/Card/NewJeans.jpg";
import AdminCardHeart from "../../assets/Icons/Card/AdminCardHeart.svg";
import { useState } from "react";
import * as api from "../../api";
import { useEffect } from "react";

const CardBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`; // page에서 사용

const CardEach = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 300px;
  min-width: 370px;
  border-radius: 16px;
  cursor: pointer;
  margin: 9px;
  box-shadow: 8px 8px 8px 5px rgba(67, 0, 209, 0.05);
  scroll-snap-align: center;
`;
const Thumbnail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //background-image: url('/Cardrose.jpg');
  background-image: url(" ${(props) => props.image} ");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: none;
  border-radius: 16px;
  //margin-bottom: 15px;

  height: 200px;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5px;
  margin-left: 15px;
  margin-right: 15px;
  line-height: 18px;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 5px;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 7px;
  margin-right: 4px;
  margin-top: 4px;
`;

const Icon = styled.img`
  cursor: pointer; //마우스를 갖다대면 손바닥 모양이 뜬다
  z-index: 5px;
  filter: ${(props) =>
    props.liked
      ? "invert(0.5) sepia(1) saturate(1000%) hue-rotate(0deg)"
      : "none"};
`;

const AdminCard = ({ id, image, title, space, floor, area, onClick }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState({});

  const getIsLiked = async () => {
    const userType = localStorage.getItem("UserType");
    if (userType === "2" && localStorage.getItem("Pk")) {
      const res = await api.getIsPopupplacelike(localStorage.getItem("Pk"), id);

      setIsLiked(res);
      console.log(res);
    }
  };

  useEffect(() => {
    getIsLiked();
  }, []);

  const handleHeartClick = (event) => {};

  return (
    <CardEach onClick={onClick}>
      <Thumbnail image={image} />
      <TitleWrapper>
        <Typo weight="600">{title}</Typo>
      </TitleWrapper>
      <TextBox>
        <TextWrapper>
          <Margin height="6" />
          <Typo size="small" color="gray">
            {space}
          </Typo>
          <Margin height="5" />
          <Typo size="small" color="gray">
            {floor}
          </Typo>
          <Margin height="5" />
          <Typo size="small" color="gray">
            {area}
          </Typo>
        </TextWrapper>
        <TextWrapper>
          <Icon
            onClick={(event) => {
              event.stopPropagation();
              // setIsCardLiked((prev) => !prev);
              // console.log("isLiked value:", isCardLiked);

              api
                .postplacelike(id, localStorage.getItem("Pk"))
                .then((data) => {
                  console.log("Like successfully posted:", data);
                })
                .catch((error) => {
                  console.error("Error posting like:", error);
                });
            }}
            src={AdminCardHeart}
            alt="logo"
            liked={isLiked?.like_state === 1}
          />
        </TextWrapper>
      </TextBox>
      <Margin height="10" />
    </CardEach>
  );
};

export default AdminCard;
