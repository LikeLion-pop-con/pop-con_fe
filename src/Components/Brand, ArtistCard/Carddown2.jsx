import React from "react";
import { styled } from "styled-components";
import Typo from "../../assets/Typo";
import { BsHeart,BsHeartFill } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { useState } from "react";
import Margin from "../Margin/Margin";
import { postMylikebrand } from "../../api";
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Toptext = styled.p``;

const BodytextWrapper = styled.div`
  width: 300px;
  text-align: center;
  margin: 15px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: -60%;
  right: -5%;
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  width: 45px;
  height: 45px;
  border: 1px solid lightgray;
  border-radius: 50%;
  padding: 8px;
  background-color: transparent;
  margin: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Carddown2 = ({ toptext, bodytext, popup_name, userName }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    postMylikebrand(popup_name, userName)
      .then((data) => {
        console.log("Like successfully posted:", data);
      })
      .catch((error) => {
        console.error("Error posting like:", error);
      });
  };

  return (
    <>
      <Wrapper>
        <Toptext>
          <Typo size="1.1rem" weight="400">
            {toptext}
          </Typo>
        </Toptext>
        <BodytextWrapper>
          <Typo size="0.9rem" weight="300" color="gray" lineheight="20px">
            {bodytext}
          </Typo>
        </BodytextWrapper>
        <ButtonWrapper>
          <Button onClick={handleLikeClick}>
            {isLiked ? <BsHeartFill size={20} color="red" /> : <BsHeart size={20} />}
          </Button>
          <Button>
            <BsFillShareFill size={20} />
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default Carddown2;
