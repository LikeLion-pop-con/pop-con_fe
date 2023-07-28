import React from 'react';
import { styled } from 'styled-components';
import Typo from '../../assets/Typo';

const PagetitleWrapper = styled.div`
    padding: 10px;
`
const Toptitle = styled.div`
    
`
const Bodytitle = styled.div`
    display: flex;
    flex-direction: row;
    gap:30px;
    margin-top: 50px;
`
const Label = styled.div`
    cursor: pointer;
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
    color: ${(props) => (props.active ? "black" : "gray")};
`
const PageTitle = ({ topTitle, inProgressLabel, appliedLabel,activePage, onTabClick }) => {
    return (
        <>
        <PagetitleWrapper>
        <Typo size="1.5rem" weight = "600">
        <Toptitle>{topTitle}</Toptitle>
        </Typo>
            <Bodytitle>
                <Label active={activePage === "inProgress"}
                        onClick={() => onTabClick("inProgress")}>{inProgressLabel}</Label>
                <Label active={activePage === "applied"}
                        onClick={() => onTabClick("applied")}>{appliedLabel}</Label>
            </Bodytitle>
        </PagetitleWrapper>
        </>
    );
};

export default PageTitle;