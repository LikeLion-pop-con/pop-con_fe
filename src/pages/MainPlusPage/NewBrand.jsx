import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Typo from "../../assets/Typo";
import Margin from "../../Components/Margin/Margin";
import Card from "../../Components/Card/Card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Title = styled.div`
  width: 100%;
  padding-left: 1.5rem;
`;
const PopupWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
`;

function NewBrand() {
  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <Margin height="40" />
      <Title>
        <Typo fontType="large">새로운 팝업 브랜드</Typo>
      </Title>
      <Margin height="20" />
      <PopupWrap>
        <Card
          main="rose is my girlfriend"
          title="rose is queen"
          image="Cardrose.jpg"
        />
        <Card
          main="rose is my girlfriend"
          title="rose is queen"
          image="Cardrose.jpg"
        />
        <Card
          main="rose is my girlfriend"
          title="rose is queen"
          image="Cardrose.jpg"
        />
        <Card
          main="rose is my girlfriend"
          title="rose is queen"
          image="Cardrose.jpg"
        />
        <Card
          main="rose is my girlfriend"
          title="rose is queen"
          image="Cardrose.jpg"
        />
        <Card
          main="rose is my girlfriend"
          title="rose is queen"
          image="Cardrose.jpg"
        />
      </PopupWrap>
    </Wrapper>
  );
}
export default NewBrand;
