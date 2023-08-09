import styled from "styled-components";
import Typo from "../../assets/Typo";
import { useState } from "react";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`;
const Button = styled.button`
    padding: 5px;
    background-color: lightgray;
    border: none;
    border-radius: 5px;
    margin-left: 165px;
`
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
function handleNextStep(formData, triggerNext) {
  // 여기서 formData를 사용하여 원하는 작업을 수행하고 다음 단계로 이동할 수 있습니다.
  // 예를 들어, 채팅봇에게 다음 단계로 이동하라는 신호를 보낼 수 있습니다.
  triggerNext("14");
}
function Input2({ triggerNextStep }) {
  const [formData, setFormData] = useState({
    buildingName: "",
    address: "",
    spaceType: "",
    optionType: "",
    spaceSize: "",
    rentalFee: "",
    spaceDetails: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFormData = {
      ...formData,
      purpose: event.currentTarget.purpose.value,
    eventStage: event.currentTarget.eventStage.value,
    eventDate: event.currentTarget.eventDate.value,
    spaceType: event.currentTarget.spaceType.value,
    spaceSize: event.currentTarget.spaceSize.value,
    rentalFee: event.currentTarget.rentalFee.value,
    location: event.currentTarget.location.value,
    companyName: event.currentTarget.companyName.value,
    };

    setFormData(newFormData);
    triggerNextStep();

    console.log("입력된 데이터:", newFormData);
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
      <Name>
        <Typo style={{ padding: "5px" }} fontType="medium">
          대관 목적을 선택하세요
        </Typo>
        <select name="purpose">
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
        <select name="eventStage">
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
        <input type="date" name="eventDate"/>
      </Space>
      <Option>
        <Typo style={{ padding: "5px" }} fontType="medium">
          공간 유형
        </Typo>
        <select name="spaceType">
          <option value="none">선택하세요.</option>
          <option value="store">실내 공간</option>
          <option value="stage">실외 공간</option>
        </select>
      </Option>
      <Name>
        <Typo style={{ padding: "5px" }} fontType="medium">
          공간 평수 선택
        </Typo>
        <select name="spaceSize">
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
        <select name="rentalFee">
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
        <select name="location">
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
        <input type="text"  name="companyName" placeholder="입력하세요" />
      </Space>
      <Button type="submit">제출</Button>   
      </form>
    </Wrapper>
    
  );
}
export default Input2;
