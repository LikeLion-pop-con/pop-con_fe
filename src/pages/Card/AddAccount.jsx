import React from 'react';
import styled from 'styled-components'
import Header from '../../Components/Header/Header';
import { useHistory, useNavigate } from 'react-router-dom';
import Nong from '../../assets/Icons/Bank/농협.svg'
import Kook from '../../assets/Icons/Bank/국민은행.svg'
import Shin from '../../assets/Icons/Bank/신한.svg'
import City from '../../assets/Icons/Bank/시티은행.svg'
import Woori from '../../assets/Icons/Bank/우리은행.svg'
import Kako from '../../assets/Icons/Bank/카카오뱅크.svg'
import Toss from '../../assets/Icons/Bank/토스뱅크.svg'
import Hana from '../../assets/Icons/Bank/하나.svg'
import Ki from '../../assets/Icons/Bank/기업.svg'
import Margin from "../../Components/Margin/Margin";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
`
const Text = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 50px;
`
const Box = styled.div`
    height: 80px;
    width: 100px;
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    flex-direction: column;
    &:hover {
        background-color: #c0c0c0;
    }
`
const AddAccount = () => {
    const history = useNavigate();

    const handleBoxClick = (bankName) => {
        history(`/cardList/AddAccount2/${bankName}`); 
    };
    return (
        <>
        <Header left="logo" right={["login", "search"]} />
        <Text>등록할 은행을 선택해주세요.</Text>
        <Wrapper>
            <Box onClick={() => handleBoxClick('농협')}><img src={Nong}/><Margin height="5" />농협</Box>
            <Box onClick={() => handleBoxClick('우리은행')}><img src={Woori}/><Margin height="5" />우리은행</Box>
            <Box onClick={() => handleBoxClick('신한은행')}><img src={Shin}/><Margin height="5" />신한은행</Box>
            <Box onClick={() => handleBoxClick('국민은행')}><img src={Kook}/><Margin height="5" />국민은행</Box>
            <Box onClick={() => handleBoxClick('하나은행')}><img src={Hana}/><Margin height="5" />하나은행</Box>
            <Box onClick={() => handleBoxClick('기업은행')}><img src={Ki}/><Margin height="5" />기업은행</Box>
            <Box onClick={() => handleBoxClick('씨티은행')}><img src={City}/><Margin height="5" />씨티은행</Box>
            <Box onClick={() => handleBoxClick('토스뱅크')}><img src={Toss}/><Margin height="5" />토스뱅크</Box>
            <Box onClick={() => handleBoxClick('카카오뱅크')}><img src={Kako}/><Margin height="5" />카카오뱅크</Box>
        </Wrapper>
        </>
    );
};

export default AddAccount;