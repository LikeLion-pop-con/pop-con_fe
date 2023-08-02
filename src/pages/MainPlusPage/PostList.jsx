import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Typo from "../../assets/Typo";
import Margin from "../../Components/Margin/Margin";
import PostCard from "../../Components/Card/PostCard";
import PostCardimg1 from "../../assets/Icons/Card/PostCardimg1.png";
import Footer from "../../Components/Footer/Footer";
import PostCardimg2 from "../../assets/Icons/Card/PostCardimg2.jpg";
import NavigationBar from "../../Components/Navigate/Navigate";

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

function PostList() {
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
            image={PostCardimg2} 
            type={'추천 포스트'} 
            title={'IAB studio & Lee 팝업 스토어 현장'} 
            color='green' 
            main={'IAB studio는 디지털과 아날로그 사이에서 충동적이지만 진지하고 꾸준하게 우리만의 길을 걸어갑니다. 우리는 IAB studio가 재화로서 많은 사람들이 각자의 개성을 표현하는 하얀 캔버스가 되길 원합니다.'} />
        <PostCard 
            image={PostCardimg1} 
            type={'추천 포스트'} 
            title={'프랑스 밤잼 크렘드 마롱 \n 팝업 스토어 현장'} 
            color='green' 
            main={'크렘드마롱(Crème de Marrons)은 클레망포지에사의 140년 전통 프랑스산 밤잼 브랜드 입니다. 크렘드마롱은 프랑스 남부 리옹 지역에서 수확하는 야생밤을 원료로 깊은 밤의 풍미를 선사합니다.'} />
      </CardBlock>
      <NavigationBar/>
      <Footer/>
    </>
  );
}
export default PostList;
