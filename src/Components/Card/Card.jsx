import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Typo from '../../assets/Typo';
import Margin from '../Margin/Margin';

const CardBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`   // page에서 사용

const CardEach = styled.div`
    display:flex;
    flex-direction:column;
    background-color: white;

    height: 270px;
    min-width: 180px;

    border-radius: 12px;
    cursor: pointer;
    margin: 9px;
    box-shadow: 8px 8px 8px 5px rgba(67, 0, 209, 0.05);
    
`
const Thumbnail = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    //background-image: url('/Cardrose.jpg');
    background-image: url(' ${(props) => props.image} ');
    background-size: cover;
    background-repeat: no-repeat;
    background-color: none;
    border-radius: 16px;

    height: 180px;
    width: 100%;
    
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 15px;
    margin-right: 15px;
`




const Card = () => {
    const navigate = useNavigate();
    return (
            <CardEach onClick={() => navigate('/')}>
                <Thumbnail image='Cardrose.jpg'/>
                <TextWrapper>
                    <Typo fontType='title'>Rose</Typo>
                    <Margin height='4'/>
                    <Typo size='small' color='darkgray'>뮤직 아티스트</Typo>
                    <Margin height='6'/>
                    <Typo size='small' color='darkgray'>그녀만의 색깔을 <br/> 담고 있는 목소리</Typo>
                </TextWrapper>
            </CardEach>
    );

};

export default Card;

  


const SmallCard = styled.div`
  height: 270px;
  min-width: 200px;
  border-radius: 7px;
  background-color: ${(props) => props.color && props.theme.colors[props.color]};
  border: none;
  color: ${(props) => props.color && props.theme.colors.white};
  cursor: pointer;
  ${(props) => props.theme.font[props.fontType]};
`;


