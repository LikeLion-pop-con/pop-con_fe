import React from "react";
import { styled } from "styled-components";
import Typo from "../../assets/Typo";
import { TbPointFilled } from "react-icons/tb";
import { BsFillShareFill } from "react-icons/bs";
import { useState } from "react";
import * as api from "../../api";
import { useEffect } from "react";
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
  gap: 30px;
`;
const SubcribeNum = styled.div``;
const SubcribeText = styled.div``;
const PopNum = styled.div``;
const PopText = styled.div``;
const IconContainer = styled.div`
  margin: 3px;
`;
const IntroduceText = styled.div`
  width: 300px;
  margin: 20px;
  text-align: center;
  line-height: 1.3;
`;
const Button1 = styled.button`
  width: 80px;
  height: 45px;
  border: 1px solid lightgray;
  border-radius: 30px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button2 = styled.button`
  width: 45px;
  height: 45px;
  border: 1px solid lightgray;
  border-radius: 50%;
  padding: 8px;
  background-color: transparent;
`;
const Carddown1 = ({
  id,
  subcribeNum,
  popNum,
  introduceText,
  isLiked,
  setIsLiked,
  showButton1 = true,
  setIsShared,
}) => {
  const [isUserLiked, setIsUserLiked] = useState();
  const [subpeople, setsubpeople] = useState();
  const [isclicked, setIsclicked] = useState(false);
  const [getbrands,setgetbrandsubcount] = useState();
  const getIsLiked = async () => {
    const userType = localStorage.getItem("UserType");
    if (localStorage.getItem("Pk")) {
      const res = await api.getCheckbrandsub(localStorage.getItem("Pk"), id);

      console.log(res);

      if (res?.subscribe_state === 1) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    }
  };
  const getbrandsubcount = async () => {
    const subpeople = await api.getbrandsubcount(id);
    setsubpeople(subpeople);
    console.log(subpeople);
  };
  useEffect(() => {
    getIsLiked();
    getbrandsubcount();
  }, []);

  return (
    <>
      <Wrapper>
        <FirstBox>
          {subpeople && (
            <>
              <SubcribeNum>
                <Typo size="1.1rem" weight="400" color="main">
                  {subpeople.brandsubcounts}
                </Typo>
              </SubcribeNum>
              <SubcribeText>
                <Typo size="1.1rem" weight="400">
                  구독
                </Typo>
              </SubcribeText>
            </>
          )}
          <IconContainer>
            <TbPointFilled />
          </IconContainer>
          <PopNum>
            <Typo size="1.1rem" weight="400" color="main">
              {popNum}
            </Typo>
          </PopNum>
          <PopText>
            <Typo size="1.1rem" weight="400">
              회 팝업
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
            <Button1
              onClick={() => {
                setIsLiked((prev) => !prev);
                api
                  .postBrandsubscribe(id, localStorage.getItem("Pk"))
                  .then((data) => {
                    console.log("Like successfully posted:", data);
                  })
                  .catch((error) => {
                    console.error("Error posting like:", error);
                  });
                getbrandsubcount();
              }}
              style={{
                backgroundColor: isLiked ? "#B2A5FE" : "transparent",
                color: isLiked ? "white" : "black",
              }}
            >
              {isLiked ? "구독 중 " : "+ 구독"}
            </Button1>
          )}
          <Button2 onClick={() => setIsShared((prev) => !prev)}>
            <BsFillShareFill />
          </Button2>
        </SecondBox>
      </Wrapper>
    </>
  );
};

export default Carddown1;
