import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Typo from "../../assets/Typo";
import theme from "../../assets/theme";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import Horizon from "../Horizon/Horizon";
import { Link } from "react-router-dom";
import logo from "../../assets/Icons/Header/logo.png";
import Margin from "../Margin/Margin";


const FooterWrapper = styled.div`
  background-color: ${theme.colors.lightgray};
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  
`;
const LogoTitlebox = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
const Secondbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px; 
`;
const Label = styled(Link)`
  margin: 10px;
`;
const Thirdbox = styled.div`
  display: flex;
  flex-direction: column;
`;
const AskButton = styled.button`
  width: 9rem;
  height: 3rem;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  //background-color: main;
  //margin: 6px ;
  margin-left: 10px;
  

  font-size: 1rem;
  font-weight: 600;
`;
const Fourthbox = styled.div`
  margin: 10px;
  p {
    margin-top: 5px;
  }
`;
const Snsbox = styled.div`
  margin: 10px;
  display: flex;
  gap: 20px;
`;

const TextWrapper = styled.div`
  display:flex;
  flex-direction: column;
`;

const TextWrapper2 = styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;
`

const Icon = styled.img`
  cursor: pointer; //마우스를 갖다대면 손바닥 모양이 뜬다
`;

function Footer() {
  const navigate = useNavigate();
  return (
    <FooterWrapper>
      <LogoTitlebox>
        <Icon
          src={logo}
          width="12%"
          height="12%"
          alt="logo"
          onClick={() => navigate("/main")}
        />
        <Typo size="2rem" weight="600">
          POPCON
        </Typo>
      </LogoTitlebox>
      <Typo size="0.9rem" weight="200">
        <Secondbox>
          <Label>팝업 시작</Label>
          <Label to="/Mypage/introduce">서비스 소개</Label>
          <Label to="/Mypage/KnowList">공지사항</Label>
          <Label to="/Mypage/Service">고객 센터</Label>
          <Label to="/Guide">팝업 스토어 가이드</Label>
          <Label>이용약관</Label>
          <Label>개인정보 처리방침</Label>
          <Horizon width="100%" color="lightgrey" />
        </Secondbox>
      </Typo>
      <Typo size="1rem" weight="500">
        <Thirdbox>
          <TextWrapper2>
            <TextWrapper>
              <Label>고객지원</Label>
              <Label>평일 10:00~17:00 (13:00~15:00 제외)</Label>
            </TextWrapper>
            <AskButton>PopCon에 문의</AskButton>
          </TextWrapper2>
          <Horizon width="100%" color="lightgrey" />
        </Thirdbox>
      </Typo>
      <Fourthbox>
        <Typo size="0.6rem" color="green">
          <p>
            회사명 PopCon 주소 인천광역시 미추홀구 인하로 100 (하이테크
            스터디룸)
          </p>
          <p>대표 홍성준 사업자등록번호 123-45-68890 소셜 플랫폼</p>
          <p>신고번호 2023-인하대로-0102호 </p>
          <p>대표번호 010-4380-3228 메일 PopCon@culture.kr</p>
        </Typo>
      </Fourthbox>
      <Snsbox>
        <RiKakaoTalkFill size={35}></RiKakaoTalkFill>
        <AiOutlineTwitter size={35}></AiOutlineTwitter>
        <AiOutlineInstagram size={35}></AiOutlineInstagram>
      </Snsbox>
      <Margin height='35'/>
    </FooterWrapper>
    
  );
}
export default Footer;
