import { styled } from 'styled-components';

const HorizonEach = styled.div`
  width: ${props => props.width};
  height: 2px;
  background-color: ${props => props.color || 'gray'};
`;

const Horizon = (props) => {
  return (
    <>
    <HorizonEach width={props.width} color={props.color} />
    </>
  );
};

export default Horizon;
