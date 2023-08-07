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
          건물명(공간명)
        </Typo>
        <input type="text" placeholder="입력하세요"></input>
      </Name>
      <Address>
        <Typo style={{ padding: "5px" }} fontType="medium">
          공간 주소 (상세 주소)
        </Typo>
        <input type="text" placeholder="입력하세요"></input>
      </Address>
      <Space>
        <Typo style={{ padding: "5px" }} fontType="medium">
          공간 활용 가능 형태 (모두 선택)
        </Typo>
        <select>
          <option value="none">선택하세요.</option>
          <option value="store">팝업 스토어</option>
          <option value="stage">팝업 스테이지</option>
          <option value="gallery">팝업 갤러리</option>
          <option value="class">팝업 클래스</option>
        </select>
      </Space>
      <Option>
        <Typo style={{ padding: "5px" }} fontType="medium">
          제공 가능한 항목 (모두 선택)
        </Typo>
        <select>
          <option value="none">선택하세요.</option>
          <option value="store">전기</option>
          <option value="stage">화장실</option>
          <option value="gallery">주차</option>
          <option value="class">창고</option>
        </select>
      </Option>
      <Name>
        <Typo style={{ padding: "5px" }} fontType="medium">
          공간 크기
        </Typo>
        <input type="text" placeholder="입력하세요"></input>
      </Name>
      <Name>
        <Typo style={{ padding: "5px" }} fontType="medium">
          희망 대관료
        </Typo>
        <input type="text" placeholder="입력하세요"></input>
      </Name>
      <Name>
        <Typo style={{ padding: "5px" }} fontType="medium">
          공간의 상세 정보
        </Typo>
        <input type="text" placeholder="입력하세요"></input>
      </Name>
    </Wrapper>
  );
}
export default Input;
