import React from "react";
import Header from "../../Components/Header/Header";
import styled from "styled-components";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Margin from "../../Components/Margin/Margin";
import { useMemo } from "react";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  width: 100%;
`;

const TitleText = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 30px;
  margin-top: 30px;
`;

const BodyText = styled.div`
  margin-bottom: 10px;
  font-size: 1.2rem;
  margin-left: 30px;
`;

const CardText = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 80%;
  margin: 0px 30px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 60%;
  margin-left: 10px;
`;

const StyledInput = styled.input`
  font-size: 15px;
  color: #222222;
  width: 150%;
  border: none;
  padding-bottom: 10px;
  padding-left: 10px;
  position: relative;
  background: none;
  z-index: 5;

  &:placeholder {
    color: #aaaaaa;
  }

  &:focus {
    outline: none;
  }
`;

const Highlight = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0%;
  background-color: #666;
  width: 0;
  height: 2px;
  border-radius: 2px;
  transition: 0.5s;
`;
const NextButton = styled.button`
  width: 50%;
  height: 50px;
  margin-top: 100px;
  background-color: #ec7538;
  border-radius: 20px;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 600;
`;
const ValidText = styled(motion.div)`
  position: relative;
  transform-origin: top center;
  margin-bottom: 20px;
`;
const ValidInput = styled.input`
  font-size: 15px;
  color: #222222;
  width: 100%;
  border: none;
  padding-bottom: 6px;

  position: relative;
  background: none;
  z-index: 5;
  margin-left: 40px;

  &:placeholder {
    color: #aaaaaa;
  }

  &:focus {
    outline: none;
  }
`;
const StyledLabel = styled.label`
  position: absolute;
  width: 100px;
  color: #aaa;
  left: 0%;
  font-size: 1rem;
  bottom: 8px;
  transition: all 0.2s;

  ${StyledInput}:focus ~ &,
  ${StyledInput}:valid ~ & {
    font-size: 0.8rem;
    bottom: 40px;
    color: #666;
    font-weight: bold;
  }
`;
const ValidLabel = styled.label`
  position: absolute;
  color: #aaa;
  width: 150px;
  left: 12%;
  font-size: 1rem;
  bottom: 8px;
  transition: all 0.2s;

  ${ValidInput}:focus ~ &,
  ${ValidInput}:valid ~ & {
    font-size: 0.8rem;
    bottom: 40px;
    color: #666;
    font-weight: bold;
  }
`;
const CvcText = styled(motion.div)`
  position: relative;
  transform-origin: top center;
  margin-bottom: 20px;
`;
const CvcInput = styled.input`
  font-size: 15px;
  color: #222222;
  width: 30%;
  border: none;
  padding-bottom: 6px;

  position: relative;
  background: none;
  z-index: 5;
  margin-left: 40px;

  &:placeholder {
    color: #aaaaaa;
  }

  &:focus {
    outline: none;
  }
`;
const CvcLabel = styled.label`
  position: absolute;
  color: #aaa;
  left: 14%;
  width: 100px;
  font-size: 1rem;
  bottom: 8px;
  transition: all 0.2s;

  ${CvcInput}:focus ~ &,
  ${CvcInput}:valid ~ & {
    font-size: 0.8rem;
    bottom: 40px;
    color: #666;
    font-weight: bold;
  }
`;
const PwdText = styled(motion.div)`
  position: relative;
  transform-origin: top center;
  margin-bottom: 20px;
`;
const PwdInput = styled.input`
  font-size: 15px;
  color: #222222;
  width: 100%;
  border: none;
  padding-bottom: 6px;

  position: relative;
  background: none;
  z-index: 5;
  margin-left: 40px;

  &:placeholder {
    color: #aaaaaa;
  }

  &:focus {
    outline: none;
  }
`;
const PwdLabel = styled.label`
  position: absolute;
  color: #aaa;
  left: 14%;
  width: 150px;
  font-size: 1rem;
  bottom: 8px;
  transition: all 0.2s;

  ${PwdInput}:focus ~ &,
  ${PwdInput}:valid ~ & {
    font-size: 0.8rem;
    bottom: 40px;
    color: #666;
    font-weight: bold;
  }
`;

const Bottombar = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 120%;
`;
const Bottomother = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 45%;
  margin-left: 20px;
`;
const Bottomothers = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 31%;
  margin-left: 20px;
`;
const AddCard = () => {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const validref = useRef(null);
  const cvcref = useRef(null);
  const pwdref = useRef(null);

  const [full, setFull] = useState(false);
  const [validfull, setValidFull] = useState(false);
  const [cvcfull, setCvcFull] = useState(false);

  const [isvalid, setIsvalid] = useState(false);
  const [isCVC, setIsCVC] = useState(false);
  const [ispwd, setIspwd] = useState(false);

  useEffect(() => {
    inputRefs[0].current.value = "1111";
  }, []);

  const handleInputChange = (index, event) => {
    const { value } = event.target;

    // Allow only numeric input

    if (index === 3 && value.length === 3) {
      setFull(true);
      console.log("success");
    }
    // Move focus to the next input if the value is exactly 4 characters
    if (value.length === 4 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
    if (index === 3 && value.length === 4) {
      validref.current?.focus();
    }
  };

  const handleValidChange = (event) => {
    const final = event.target.value;
    if (event?.target.value.length === 3) {
      console.log("hihhi");
      setValidFull(true);
    }
    if (event.target.value.length === 4) {
      cvcref.current?.focus();
      validref.current.value = final;
    }
  };

  const handleCvcChange = (event) => {
    const final = event.target.value;
    if (cvcref.current?.focus()) {
      setIsCVC(true);
    }
    if (event.target.value.length === 2) {
      setCvcFull(true);
    }
    if (event.target.value.length === 3) {
      pwdref.current?.focus();
      cvcref.current.value = final;
    }
  };
  const handlePwdChange = () => {
    if (pwdref.current?.focus()) {
      setIspwd(true);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <Header left="logo" right={["login", "search"]} />
      <Wrapper>
        <TitleText>
          카드번호 입력하고
          <br />
          결제를 완료하세요.10초면 끝!
        </TitleText>
        <BodyText>체크카드, 신용카드 모두 가능해요.</BodyText>
        <Margin height="50" />
        <CardText>
          {inputRefs.map((ref, index) => (
            <InputContainer key={index}>
              <div>
                <StyledInput
                  type={index > 1 ? "password" : "text"}
                  maxLength="4"
                  required
                  inputMode="numeric"
                  onKeyDown={(event) => handleInputChange(index, event)}
                  ref={ref}
                />
                {index > 1 ? (
                  <Bottombar style={{ width: "140%" }} />
                ) : (
                  <Bottombar />
                )}
                {index === 0 && <StyledLabel>카드번호</StyledLabel>}
              </div>

              <Highlight />
            </InputContainer>
          ))}
        </CardText>
        {full && <Margin height="40" />}
        {full && (
          <ValidText
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: full ? 1 : 0,
            }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <InputContainer style={{ marginLeft: 15 }}>
              <div>
                <ValidInput
                  ref={validref}
                  type="password"
                  maxLength="4"
                  inputMode="numeric"
                  required
                  onKeyDown={(event) => handleValidChange(event)}
                />
                <Bottomother />
                {!isvalid && <ValidLabel>유효기간(mm/yy)</ValidLabel>}
              </div>
            </InputContainer>
          </ValidText>
        )}
        {validfull && <Margin height="20" />}
        {validfull && (
          <CvcText
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: validfull ? 1 : 0,
            }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <InputContainer style={{ marginLeft: 15 }}>
              <div>
                <CvcInput
                  ref={cvcref}
                  type="password"
                  maxLength="3"
                  inputMode="numeric"
                  required
                  onKeyDown={(event) => handleCvcChange(event)}
                />
                <Bottomothers />
                {!isCVC && <CvcLabel>CVC</CvcLabel>}
              </div>
            </InputContainer>
          </CvcText>
        )}
        {cvcfull && <Margin height="20" />}
        {cvcfull && (
          <PwdText
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: cvcfull ? 1 : 0,
            }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <InputContainer style={{ marginLeft: 15 }}>
              <div>
                <PwdInput
                  ref={pwdref}
                  type="password"
                  maxLength="3"
                  inputMode="numeric"
                  required
                  onKeyDown={(event) => handlePwdChange(event)}
                />
                <Bottomothers style={{ width: "50%" }} />
                {!ispwd && <PwdLabel>비밀번호 앞 2자리</PwdLabel>}
              </div>
            </InputContainer>
          </PwdText>
        )}
        <NextButton onClick={() => navigate("/cardlist/addaccount")}>
          다음
        </NextButton>
      </Wrapper>
    </>
  );
};

export default AddCard;
