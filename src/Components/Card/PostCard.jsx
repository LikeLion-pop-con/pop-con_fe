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


    //height: 470px;
    min-width: 400px;

    border-radius: 16px;
    border: 1px solid lightgray;
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
    //margin-bottom: 15px;

    height: 230px;
    width: 95%;
    
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 15px;
    line-height: 18px;
`
const TitleWrapper = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: left;
    margin-left: 20px;
    margin-top: 5px;
    line-height: 30px;
`
const TextBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 30px;
    margin-right: 7px;

`
const ThumbnailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`
const Horizon = styled.div`
  margin-left: 20px;
  width: 15%;
  height: 2px;
  background-color: green;
`;


const PostCard = () => {
    const navigate = useNavigate();
    return (
            <CardEach onClick={() => navigate('/')}>
                <ThumbnailWrapper>
                 <Thumbnail image='PostCardimg1.png'/>
                </ThumbnailWrapper>
                <Margin height='15'/>
                <TextWrapper>
                    <Typo weight='350' size='0.9rem' color='green'>추천 포스트</Typo>
                </TextWrapper>
                <TitleWrapper>
                    <Typo size= '1.3rem' weight='350'>프랑스 밤잼 크렘드 마롱 <br/> 팝업 스토어 현장</Typo>
                </TitleWrapper>
                <Margin height= '8'/>
                <Horizon/>
                <Margin height='16'/>
                <TextWrapper>
                    <Typo weight='300'>크렘드마롱(Crème de Marrons)은 클레망포지에사의<br/>140년 전통 프랑스산 밤잼 브랜드 입니다.<br/>크렘드마롱은 프랑스 남부 리옹 지역에서 수확하는<br/>야생밤을 원료로 깊은 밤의 풍미를 선사합니다.</Typo>
                </TextWrapper>
                  
                
                

            </CardEach>
    );

};

export default PostCard;

  


const tCard = styled.div`
  height: 270px;
  min-width: 400px;
  border-radius: 7px;
  background-color: ${(props) => props.color && props.theme.colors[props.color]};
  border: none;
  color: ${(props) => props.color && props.theme.colors.white};
  cursor: pointer;
  ${(props) => props.theme.font[props.fontType]};
`;


