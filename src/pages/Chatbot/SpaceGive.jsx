import styled from "styled-components";
import Typo from "../../assets/Typo";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`;
const Form = styled.div`
  width: 100%;
  input {
    width: 97%;
    height: 30px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding-left: 8px;
  }
  select {
    width: 100%;
    height: 30px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding-left: 8px;
  }
`;
const Name = styled(Form)``;
const Address = styled(Form)``;
const Space = styled(Form)``;
const Option = styled(Form)``;

function Input({ placeholder }) {
  return (
    <Wrapper>
      <Name>
        <Typo style={{ padding: "5px" }} fontType="medium">
          대관 목적을 선택하세요
        </Typo>
        <select>
          <option value="none">선택하세요.</option>
          <option value="store">신제품 런칭</option>
          <option value="stage">홍보/마케팅</option>
          <option value="gallery">기업/단체행사 (최소 5일 이상)</option>
          <option value="class">전시회</option>
          <option value="class">촬영</option>
          <option value="class">기타</option>
        </select>
      </Name>
      <Address>
        <Typo style={{ padding: "5px" }} fontType="medium">
          현재 행사 진행 단계를 선택하세요
        </Typo>
        <select>
          <option value="none">선택하세요.</option>
          <option value="store">계획 단계</option>
          <option value="stage">기획/제안 단계</option>
          <option value="gallery">행사 확정</option>
        </select>
      </Address>
      <Space>
        <Typo style={{ padding: "5px" }} fontType="medium">
          희망 행사 월 / 사용 기간
        </Typo>
        <input type="date" />
      </Space>
      <Option>
        <Typo style={{ padding: "5px" }} fontType="medium">
          공간 유형
        </Typo>
        <select>
          <option value="none">선택하세요.</option>
          <option value="store">실내 공간</option>
          <option value="stage">실외 공간</option>
        </select>
      </Option>
      <Name>
        <Typo style={{ padding: "5px" }} fontType="medium">
          공간 평수 선택
        </Typo>
        <select>
          <option value="none">선택하세요.</option>
          <option value="store">10평 미만</option>
          <option value="stage">10평 ~ 30평</option>
          <option value="stage">30평 ~ 50평</option>
          <option value="stage">50평 ~ 80평</option>
          <option value="stage">100평 이상</option>
        </select>
      </Name>
      <Name>
        <Typo style={{ padding: "5px" }} fontType="medium">
          예상 사용료(임대료)를 선택하세요
        </Typo>
        <select>
          <option value="none">선택하세요.</option>
          <option value="store">1천 만원 미만</option>
          <option value="stage">1천 만원 이상 5천 만원 미만</option>
          <option value="stage">5천 만원 이상 1억원 미만 </option>
          <option value="stage">1억원 이상 3억원 미만</option>
          <option value="stage">3억원 이상</option>
        </select>
      </Name>
      <Name>
        <Typo style={{ padding: "5px" }} fontType="medium">
          희망 공간 대관 지역
        </Typo>
        <select>
          <option value="none">선택하세요.</option>
          <option value="store">서울</option>
          <option value="stage">경기</option>
          <option value="stage">그 외 지역</option>
        </select>
      </Name>
      <Space>
        <Typo style={{ padding: "5px" }} fontType="medium">
          회사명 / 브랜드명
        </Typo>
        <input type="text" placeholder="입력하세요" />
      </Space>
    </Wrapper>
  );
}
export default Input;
