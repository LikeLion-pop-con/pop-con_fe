import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header/Header';
import Modal from 'react-modal';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MYCardList = styled.div`
  width: 60%;
  height: 200px;
  background-color: gray;
  border-radius: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid lightgray;
  background: linear-gradient(180deg, rgba(128, 128, 128, 0.3) 50%, transparent 50%);
`;

const CardCom = styled.div``;

const CardNum = styled.div``;

const AddButton = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  margin-top: 40px;
  text-align: center;
  cursor: pointer;
`;

const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: center;
`;

const AddButton1 = styled.div`
  width: 50%;
  height: 40px;
  background-color: lightgray;
  margin-top: 40px;
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  align-items: center;
  padding: 2px;
  margin: 5px;
  justify-content: center;
`;
  
const CardList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <MYCardList>
        <CardCom>국민카드</CardCom>
        <CardNum>0000-0000-0000-0000-0000</CardNum>
      </MYCardList>
      <AddButton onClick={handleAddButtonClick}>
        계좌 / 카드 등록하기
      </AddButton>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Additional Content Modal"
        style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.3)",
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            content: {
              position: "fixed",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              margin: "auto auto",
              width: "325px",
              height: "200px",
              borderRadius: "20px",
            },
          }}
      >
        <ButtonBox>
          <AddButton1>신용/체크카드</AddButton1>
          <AddButton1>은행계좌</AddButton1>
        </ButtonBox>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </Wrapper>
  );
};

export default CardList;
