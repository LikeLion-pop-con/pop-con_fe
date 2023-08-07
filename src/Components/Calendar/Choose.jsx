import React from 'react';
import { styled } from 'styled-components';
import {RiCheckboxBlankFill} from 'react-icons/ri'
import {RiCheckboxBlankLine} from 'react-icons/ri'
import Typo from '../../assets/Typo';
const Box = styled.div`
    display: flex;
    margin-left: 200px;
`
const Icon = styled.div`
    margin: 3px;
`
const Labal = styled.div`
    margin: 2px;
    font-size: 0.8rem;
`
const Choose = () => {
    return (
       <>
       <Box>
       <Icon><RiCheckboxBlankFill/></Icon>
        <Labal>선택</Labal>
       <Icon><RiCheckboxBlankLine fill='gray'/></Icon>
       <Labal>불가</Labal>
       </Box>
       </>
    );
};

export default Choose;