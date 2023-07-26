import styled from "styled-components";

const StyledTypo = styled.p`
  width: ${(props) => props.width};
  font-size: ${(props) => props.size || "1rem"};
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) =>
    props.color ? props.theme.color[props.color] : props.theme.colors.black};

  ${(props) => props.fontType && props.theme.font[props.fontType]}
`;
const Typo = (props) => <StyledTypo {...props}>{props.children}</StyledTypo>;

export default Typo;
