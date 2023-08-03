import React from 'react';
import styled from 'styled-components';
import Typo from '../../assets/Typo';
import Horizon from '../Horizon/Horizon';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InfoText = styled.p`
    margin-top: 40px;
    margin-bottom: 20%;
`

const TitleText = styled.p`
    margin: 30px;
`

const BodyText = styled.p`
    width: 80%;
    margin-left: 10%;
    line-height: 1.6;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
`

const Popinfodetail = ({ bodyText }) => {
    return (
        <>
            <Wrapper>
                <Typo size="1.3rem" weight="600">
                    <InfoText>팝업 정보</InfoText>    
                </Typo>
                <Horizon width="90%" color="black"/>
                <TextWrapper>
                    <div>
                        <TitleText>
                            <Typo size="1.3rem" weight="600">팝업 소개</Typo>
                        </TitleText>
                    </div>
                    <div>
                        <BodyText>
                            <Typo size="1rem" weight="400">
                                {bodyText}
                            </Typo>
                        </BodyText>
                    </div>
                </TextWrapper>
            </Wrapper>
        </>
    );
};

export default Popinfodetail;
