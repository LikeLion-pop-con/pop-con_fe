import styled from "styled-components";
import Typo from "../../assets/Typo";
import theme from "../../assets/theme";
import { RiKakaoTalkFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import Horizon from "../Horizon/Horizon";
const FooterWrapper = styled.div`
  background-color: ${theme.colors.lightgray};
  padding: 1rem;
`;
const LogoTitlebox = styled.div`
  padding: 10px;
`;
const Secondbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
`;
const Label = styled.label`
  margin: 10px;
`;
const Thirdbox = styled.div`
  display: flex;
  flex-direction:column;
  
`;
const AskButton = styled.button`
  width: 9rem;
  height: 3rem;
  border-radius: 8px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  background-color: white;
  margin: 10px;
  font-size: 1rem;
  font-weight: 600;
`
const Fourthbox = styled.div`
  margin: 10px;
  p{
    margin-top: 5px;
  }
`
const Snsbox = styled.div`
  margin: 10px;
  display: flex;
  gap:20px;
`
function Footer() {
  return (
    <FooterWrapper>
      <LogoTitlebox><Typo size="2rem" weight="600">POPCON</Typo></LogoTitlebox>
      <Typo size="1rem" weight="200">
      <Secondbox>
        <Label>팝업 시작</Label>
        <Label>서비스 소개</Label>
        <Label>공지사항</Label>
        <Label>고객 센터</Label>
        <Label>팝업 스토어 가이드</Label>
        <Label>이용약관</Label>
        <Label>개인정보 처리방침</Label>
        <Label>커뮤니티 운영방침</Label>
        <Horizon width="100%" color="lightgrey"/>
      </Secondbox>
      </Typo>
      <Typo size="1.2rem" weight="600">
      <Thirdbox>
        <Label>고객지원</Label>
        <Label>평일 10:00~17:00 (13:00~15:00 제외)</Label>
        <AskButton>PopCon에 문의</AskButton>
      <Horizon width="100%" color="lightgrey"/>      
      </Thirdbox>
      </Typo>
      <Fourthbox>
        <Typo size="0.8rem" color="green">
        <p>회사명 PopCon 주소 인천광역시 미추홀구 인하로 100 (하이테크 스터디룸)</p>      
        <p>대표 홍성준 사업자등록번호 123-45-68890 소셜 플랫폼</p>
        <p>신고번호 2023-인하대로-0102호 </p>
        <p>대표번호 010-4380-3228 메일 PopCon@culture.kr</p>
        </Typo>            
      </Fourthbox>
      <Snsbox>
        <RiKakaoTalkFill size={40}></RiKakaoTalkFill>
        <AiOutlineTwitter size={40}></AiOutlineTwitter>
        <AiOutlineInstagram size={40}></AiOutlineInstagram>
      </Snsbox>
    </FooterWrapper>
  );
}
export default Footer;