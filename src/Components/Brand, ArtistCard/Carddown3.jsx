import React from "react";
import { styled } from "styled-components";
import Typo from "../../assets/Typo";
import { TbPointFilled } from "react-icons/tb";
import { BsFillShareFill } from "react-icons/bs";
import { useState } from "react";
import * as api from "../../api";
import { useEffect } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useRef } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const FirstBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
const SecondBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;
const PopNum = styled.div``;
const PopText = styled.div``;
const IntroduceText = styled.div`
  width: 300px;
  margin: 10px 20px;
  text-align: center;
  line-height: 1.3;
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
const Button2 = styled.button`
  width: 45px;
  height: 45px;
  border: 1px solid lightgray;
  border-radius: 50%;
  padding: 8px;
  background-color: transparent;
`;
const Carddown3 = ({
  id,
  subcribeNum,
  popNum,
  introduceText,
  isLiked,
  setIsLiked,
  showButton1 = true,
  num,
}) => {
  const [isUserLiked, setIsUserLiked] = useState(0);

  const getIsLiked = async () => {
    const userType = localStorage.getItem("UserType");
    if (userType === "2" && localStorage.getItem("Pk")) {
      const res = await api.getIsPopupplacelike(localStorage.getItem("Pk"), id);

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
        <FirstBox>
          <PopNum>
            <Typo size="1.1rem" weight="400" color="main">
              {num}
            </Typo>
          </PopNum>
          <PopText>
            <Typo size="1.1rem" weight="400">
              회 좋아요
            </Typo>
          </PopText>
        </FirstBox>
        <IntroduceText>
          <Typo size="1rem" weight="200">
            {introduceText}
          </Typo>
        </IntroduceText>
        <SecondBox>
          {showButton1 && (
            <Button
              onClick={() => {
                setIsLiked((prev) => !prev);

                api
                  .postplacelike(id, localStorage.getItem("Pk"))
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
          )}
          <Button2>
            <BsFillShareFill />
          </Button2>
        </SecondBox>
      </Wrapper>
    </>
  );
};

export default Carddown3;
