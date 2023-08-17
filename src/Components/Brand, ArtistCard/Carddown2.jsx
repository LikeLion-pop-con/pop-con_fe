import React from "react";
import { styled } from "styled-components";
import Typo from "../../assets/Typo";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import * as api from "../../api";
import { useState } from "react";
import Margin from "../Margin/Margin";
import { useEffect } from "react";
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  white-space: pre-line;
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
  cursor: pointer;
`;

const Carddown2 = ({
  id,
  toptext,
  isLiked,
  setIsLiked,
  bodytext,
  setIsShared,
}) => {
  const [isUserLiked, setIsUserLiked] = useState();

  const getIsLiked = async () => {
    if (localStorage.getItem("Pk")) {
      const res = await api.getPopupIsLiked(localStorage.getItem("Pk"), id);

      console.log(res);

      if (res?.like_state === 1) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    }
  };

  useEffect(() => {
    getIsLiked();
  }, []);

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
          <Button
            onClick={() => {
              setIsLiked((prev) => !prev);

              api
                .postMylikepopup(id, localStorage.getItem("Pk"))
                .then((data) => {
                  console.log("Like successfully posted:", data);
                })
                .catch((error) => {
                  console.error("Error posting like:", error);
                });
            }}
          >
            {isLiked ? (
              <BsHeartFill size={20} color="red" />
            ) : (
              <BsHeart size={20} />
            )}
          </Button>
          <Button onClick={() => setIsShared((prev) => !prev)}>
            <BsFillShareFill size={20} />
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default Carddown2;
