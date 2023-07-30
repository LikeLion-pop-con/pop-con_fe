import styled from "styled-components";

const StyledTypo = styled.p`
  width: ${(props) => props.width}px;
  font-size: ${(props) => props.size || "1rem"};
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.black};

  ${(props) => props.fontType && props.theme.font[props.fontType]}
  opacity: ${(props) => props.opacity || "1"}
`;
const Typo = (props) => <StyledTypo {...props}>{props.children}</StyledTypo>;

export default Typo;
