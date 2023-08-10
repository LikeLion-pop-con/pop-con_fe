import React from 'react';
import styled from 'styled-components'
import Header from '../../Components/Header/Header';
import { useNavigate } from 'react-router-dom';
const Text = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 50px;
`
const Text1 = styled.div`
    font-size: 15px;
    
    margin-top: 50px;
    margin-bottom: 50px;
`
const NextButton = styled.button`
  width: 50%;
  height: 50px;
  margin-top: 100px;
  background-color: #ec7538;
  border-radius: 15px;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: white;
`;
const AddAccount3 = () => {
    const navigate = useNavigate();
    
    return (
        <>
        <Header left="logo" right={["login", "search"]} />
        <Text>
            계좌등록이 완료되었습니다!
        </Text>
        <Text1>
            등록하신 계좌를 이용해 결제해보세요!
        </Text1>
        <NextButton onClick={() => navigate('/main')}>홈</NextButton>
        </>
    );
};

export default AddAccount3;