import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Icons/Header/logo.png';
import Button from '../../assets/Icons/Card/Button.svg';
import Typo from '../../assets/Typo';
import Margin from '../Margin/Margin';
import Header from '../Header/Header';

const CardBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`   // page에서 사용

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin: 5px;
`   // page에서 사용

const CardEach = styled.div`
    display:flex;
    flex-direction:column;
    background-color: white;

    width: 300px;
    border: 0.5px solid lightgray;

    border-radius: 16px;
    cursor: pointer;
    margin: 15px;
    box-shadow: 8px 8px 8px 5px rgba(67, 0, 209, 0.05);
    scroll-snap-align: center;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    margin: 15px;
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UnderWapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
`

const Icon = styled.img`
  cursor: pointer; //마우스를 갖다대면 손바닥 모양이 뜬다 
`;

const CheckCard = ({title, onClick}) => {
    const navigate = useNavigate();
    return (
            <CardEach onClick={onClick}>
                <LogoWrapper>
                    <Icon src={logo} width='10%' height='10%' alt='logo' onClick={() => navigate('/main')} />
                </LogoWrapper>

                <TitleWrapper>
                    <Typo size='0.8rem'>{title}</Typo>
                </TitleWrapper>
                <Margin height='10'/>
                <UnderWapper>
                    <TextBox onClick={() => navigate(-1)}>
                        YES
                    </TextBox>
                    <TextBox onClick={() => navigate(-1)}>
                        No
                    </TextBox>
                </UnderWapper>
            </CardEach>
    );
};

export default CheckCard;