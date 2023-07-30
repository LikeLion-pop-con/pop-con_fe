import React from 'react';
import { styled } from 'styled-components';
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
const Popinfodetail = () => {
    return (
        <>
        <Wrapper>
        <Typo size="1.3rem" weight="600">
            <InfoText>팝업 정보</InfoText>    
        </Typo>
        <Horizon width="100%" color="lightgrey"/>  
        </Wrapper>
        </>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    );
};

export default Popinfodetail;