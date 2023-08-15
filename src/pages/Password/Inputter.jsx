import React, { useState, useCallback,useEffect } from "react";
import "./Inputter.css";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import * as api from "../../api";
const PASSWORD_MAX_LENGTH = 4; // 비밀번호 입력길이 제한 설정
const pw = localStorage.getItem("account_password");
const shuffle = (nums) => {
  // 배열 섞는 함수
  let num_length = nums.length;
  while (num_length) {
    let random_index = Math.floor(num_length-- * Math.random());
    let temp = nums[random_index];
    nums[random_index] = nums[num_length];
    nums[num_length] = temp;
  }
  return nums;
};

const Inputter = ({ onPasswordChange }) => {
  let nums_init = Array.from({ length: 10 }, (v, k) => k);
  const [nums, setNums] = useState(nums_init);
  const [password, setPassword] = useState("");
  const [isYes, setIsYes] = useState(false);
  const id = localStorage.getItem('Pk');
  const [user_pk, setUserPk] = useState(id);
  const navigate = useNavigate();
  const handlePasswordChange = useCallback(
    (num) => {
      if (password.length === PASSWORD_MAX_LENGTH) {
        return;
      }
      setPassword(password + num.toString());
      onPasswordChange(password + num.toString());
    },
    [password]
  );
  const handleNextClick = async () => {
    try {
      const account_password = password;
      const response = await api.postCard(
        user_pk,
        account_password,
        null, // bank
        null, // bank_account_number
        null, // cardNumberInput
        null, // maxDateInput
        null, // cvcInput
        null
      );
  
      console.log("Card registration successful:", response);
    } catch (error) {
      console.error("Card registration error:", error);
    }
  };
  const erasePasswordOne = useCallback(() => {
    setPassword((prevPassword) =>
      prevPassword.slice(0, prevPassword.length === 0 ? 0 : prevPassword.length - 1)
    );
  }, []);

  const erasePasswordAll = useCallback(() => {
    setPassword("");
  }, []);

  const shuffleNums = useCallback(
    (num) => () => {
      // 0 ~ 9 섞어주기
      let nums_random = Array.from({ length: 10 }, (v, k) => k); // 이 배열을 변경해 입력문자 변경 가능
      setNums(shuffle(nums_random));
      handlePasswordChange(num);
    },
    [handlePasswordChange]
  );
  const checkPasswordMatch = () => {
    if (!pw) {
      handleNextClick();
      yestoast();
      localStorage.setItem("account_password", password);
      navigate("/CardList");
    } else if (password === pw) {
      yestoast();
      navigate("/CardList");
    } else {
      yestoast1();
    }
  };
  const onClickSubmitButton = () => {
    // 비밀번호 제출
    if (password.length === 0) {
      alert("비밀번호를 입력 후 눌러주세요!");
    } else {
      checkPasswordMatch();
    }
  };
  const yestoast = () =>
  toast.success("결제비밀번호가 일치합니다.", {
    duration: 6000,
    style: {
      marginTop: 50,
    },
  }); const yestoast1 = () =>
  toast.error("아이디 혹은 비밀번호가 잘못되었습니다.", {
    duration: 6000,
    style: {
      marginTop: 50,
    },
  });
  return (
    <>
      <input className="password-container" type="password" value={password}></input>
      <div className="inputter__flex">
        {nums.map((n, i) => {
          const Basic_button = (
            <button
              className="num-button__flex spread-effect fantasy-font__2_3rem"
              value={n}
              onClick={shuffleNums(n)}
              key={i}
            >
              {n}
            </button>
          );
          return i === nums.length - 1 ? (
            <>
              <button
                className="num-button__flex spread-effect fantasy-font__2_3rem"
                onClick={erasePasswordAll}
              >
                X
              </button>
              {Basic_button}
            </>
          ) : (
            Basic_button
          );
        })}
        <button
          className="num-button__flex spread-effect fantasy-font__2_3rem"
          onClick={erasePasswordOne}
        >
          ←
        </button>
      </div>
      <div>
        <button type="submit" className="submit-button" onClick={onClickSubmitButton}>
          완료
        </button>
        <Toaster position="top-center" />
      </div>
    </>
  );
};

export default Inputter;
