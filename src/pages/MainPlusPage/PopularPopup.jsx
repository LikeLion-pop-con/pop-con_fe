import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Typo from "../../assets/Typo";
import Margin from "../../Components/Margin/Margin";
import LargeCard from "../../Components/Card/LargeCard";
import Footer from "../../Components/Footer/Footer";

import NewJeans from "../../assets/Icons/Card/NewJeans.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  padding-left: 1.5rem;
  display: inline-flex;
`;

const CustomTypo = styled(Typo)`
  color: #ec7538;
`;

const CardBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    white-space: pre-line;// \n를 css에 적용시키려면 필요한 코드
`;

function PopularPopup() {
  return (
    <Wrapper>
      <Header left="logo" right={["login", "search"]} />
      <Margin height="40" />
      <Title>
        <CustomTypo fontType="large">예매</CustomTypo>
        <div>&nbsp;</div>
        <Typo fontType="large">가능한 인기 팝업</Typo>
      </Title>
      <Margin height="20" />
      <CardBlock>
        <LargeCard image={NewJeans} title='NewJeans의 HYPE맑음' popcategory='팝업 스토어' detail='창작 예술' space={'하텍 해동 스룸G \n인하대학교'} date='2023.07.21~2023.08.19'/>  
        <LargeCard image={NewJeans} title='NewJeans의 HYPE맑음' popcategory='팝업 스토어' detail='창작 예술' space={'하텍 해동 스룸G \n인하대학교'} date='2023.07.21~2023.08.19'/>
        <LargeCard image={NewJeans} title='NewJeans의 HYPE맑음' popcategory='팝업 스토어' detail='창작 예술' space={'하텍 해동 스룸G \n인하대학교'} date='2023.07.21~2023.08.19'/>  
        <LargeCard image={NewJeans} title='NewJeans의 HYPE맑음' popcategory='팝업 스토어' detail='창작 예술' space={'하텍 해동 스룸G \n인하대학교'} date='2023.07.21~2023.08.19'/>  
      </CardBlock>
      <Footer/>
    </Wrapper>
  );
}
export default PopularPopup;
