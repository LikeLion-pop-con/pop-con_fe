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

    min-width: 300px;
    border: 0.5px solid lightgray;

    border-radius: 16px;
    cursor: pointer;
    margin: 15px;
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

    height: 300px;
    width: 100%;
    
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5px;
    margin-left: 15px;
    margin-right: 15px;
    line-height: 25px;
`
const TitleWrapper = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin: 15px;
`
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
`
const UnderWapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px;
`



const PopupCard = () => {
    const navigate = useNavigate();
    return (
            <CardEach onClick={() => navigate('/')}>
                <Thumbnail image='PopupCardimg1.png'/>
                <TextBox>
                    <TitleWrapper>
                        <Typo >IAB studio 팝업이 요청되었습니다!</Typo>
                    </TitleWrapper>
                    <TextWrapper>
                        <Typo weight='300' size='0.9rem'>팝업 장소와 일정이 확정되면 알려드릴게요.<br/>  이 팝업 정보를 공유해보세요!  </Typo>
                    </TextWrapper>
                </TextBox>
                <UnderWapper>
                    <Typo> dkssud</Typo>
                    <Typo fontType='medium'> 확인</Typo>
                    <Typo> dkssud</Typo>
                </UnderWapper>

            </CardEach>
    );

};

export default PopupCard;

  


const SmallCard = styled.div`
  height: 270px;
  min-width: 400px;
  border-radius: 7px;
  background-color: ${(props) => props.color && props.theme.colors[props.color]};
  border: none;
  color: ${(props) => props.color && props.theme.colors.white};
  cursor: pointer;
  ${(props) => props.theme.font[props.fontType]};
`;


