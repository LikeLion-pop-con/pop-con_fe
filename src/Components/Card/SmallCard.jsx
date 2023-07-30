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

    height: 230px;
    min-width: 150px;

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
    border-radius: 16px;
    
    height: 150px;
    width: 100%;
    
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 15px;
`




const SmallCard = ({image, title, category, main}) => {
    const navigate = useNavigate();
    return (
            <CardBlock>
                <CardEach onClick={() => navigate('/')}>
                    <Thumbnail image={image}/>
                    <TextWrapper>
                        <Typo size='1rem'>{title}</Typo>
                        <Margin height='8'/>
                        <Typo size='0.7rem' color='darkgray'>{category}</Typo>
                        <Margin height='6'/>
                        <Typo size='0.7rem' color='darkgray'>{main}</Typo>

                    </TextWrapper>
                </CardEach>
            </CardBlock>
    );

};

export default SmallCard;

  


const SmaldlCard = styled.div`
  height: 270px;
  min-width: 200px;
  border-radius: 7px;
  background-color: ${(props) => props.color && props.theme.colors[props.color]};
  border: none;
  color: ${(props) => props.color && props.theme.colors.white};
  cursor: pointer;
  ${(props) => props.theme.font[props.fontType]};
`;


