import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Typo from "../../assets/Typo";
import Margin from "../../Components/Margin/Margin";
import PostCard from "../../Components/Card/PostCard";
import PostCardimg1 from "../../assets/Icons/Card/PostCardimg1.png";
import Footer from "../../Components/Footer/Footer";
import PostCardimg2 from "../../assets/Icons/Card/PostCardimg1.png";

const Title = styled.div`
  width: 100%;
  padding-left: 1.5rem;
`;
const PopupWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
`;
const CardBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    white-space: pre-line;// \n를 css에 적용시키려면 필요한 코드
`   

function PopupPost() {
  return (
    <>
      <Header left="logo" right={["login", "search"]} />
      <Margin height="40" />
      <Title>
        <Typo fontType="large">팝업 포스트</Typo>
      </Title>
      <Margin height="20" />
      <CardBlock>
        <PostCard 
            image={PostCardimg1} 
            type={'추천 포스트'} 
            title={'프랑스 밤잼 크렘드 마롱 팝업 스토어 현장'}
            color='green' 
            main={'크렘드마롱(Crème de Marrons)은 클레망포지에사의 140년 전통 프랑스산 밤잼 브랜드 입니다. 크렘드마롱은 프랑스 남부 리옹 지역에서 수확하는 야생밤을 원료로 깊은 밤의 풍미를 선사합니다. 크렘드마롱의 밤잼은 자체 식품 영양공학 자와 식품연구소의 철저한 관리하에 프랑스에서 생산되고 있습니다. 원재료는 글루텐프리, 무합성첨가물 제조로 알러지 반응을 일으키지 않으며 어떠한 유전자 변형성분도 포함되어 있지 않은 건강한 식품입니다. 클레망포지에는 1882년 대담하고 독창적인 상상력으로 [마롱글라쎄(Marrons Glacé) : 겉에 달콤한 코팅이 된 프랑스 밤과자]의 생산을 시작하며, 다양한 밤 제품들을 내놓으며 오늘날 프랑스를 대표하는 밤을 전문으로 하는 회사가 되었습니다. 크렘드마롱은 클레망포지에의 상징성을 가진 대표 제품으로 세계적으로 제품력을 인정받았습니다.'} />
      </CardBlock>
      <Footer/>
    </>
  );
}
export default PopupPost;
