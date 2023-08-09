import React, { useState } from "react";
import styled from "styled-components";
import Typo from "../../assets/Typo";
import ChatBot, { triggerNextStep } from "react-simple-chatbot";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`;

const Form = styled.div`
  width: 100%;
  input,
  select {
    width: 97%;
    height: 30px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding-left: 8px;
    margin-bottom: 10px;
  }
`;
const Button = styled.button`
    padding: 5px;
    background-color: lightgray;
    border: none;
    border-radius: 5px;
    margin-left: 165px;
`
const Name = styled(Form)``;
const Address = styled(Form)``;
const Space = styled(Form)``;
const Option = styled(Form)``;
function handleNextStep(formData, triggerNext) {
  // 여기서 formData를 사용하여 원하는 작업을 수행하고 다음 단계로 이동할 수 있습니다.
  // 예를 들어, 채팅봇에게 다음 단계로 이동하라는 신호를 보낼 수 있습니다.
  triggerNext("14");
}
function Input({ triggerNextStep }) {
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
      buildingName: event.currentTarget.buildingName.value,
      address: event.currentTarget.address.value,
      spaceType: event.currentTarget.spaceType.value,
      optionType: event.currentTarget.optionType.value,
      spaceSize: event.currentTarget.spaceSize.value,
      rentalFee: event.currentTarget.rentalFee.value,
      spaceDetails: event.currentTarget.spaceDetails.value,
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
            건물명(공간명)
          </Typo>
          <input type="text" name="buildingName" placeholder="입력하세요" />
        </Name>

        <Address>
          <Typo style={{ padding: "5px" }} fontType="medium">
            공간 주소 (상세 주소)
          </Typo>
          <input type="text" name="address" placeholder="입력하세요" />
        </Address>

        <Space>
          <Typo style={{ padding: "5px" }} fontType="medium">
            공간 활용 가능 형태 (모두 선택)
          </Typo>
          <select name="spaceType">
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
          <select name="optionType">
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
          <input type="text" name="spaceSize" placeholder="입력하세요" />
        </Name>

        <Name>
          <Typo style={{ padding: "5px" }} fontType="medium">
            희망 대관료
          </Typo>
          <input type="text" name="rentalFee" placeholder="입력하세요" />
        </Name>

        <Name>
          <Typo style={{ padding: "5px" }} fontType="medium">
            공간의 상세 정보
          </Typo>
          <input type="text" name="spaceDetails" placeholder="입력하세요" />
        </Name>

        <Button type="submit">제출</Button>
      </form>
    </Wrapper>
  );
}

export default Input;
