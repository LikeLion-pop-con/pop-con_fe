import React, { useState, useCallback ,useEffect  } from "react";
import "./Inputter.css";
import { useNavigate} from "react-router-dom";
import * as api from "../../api";
const PASSWORD_MAX_LENGTH = 4; // 비밀번호 입력길이 제한 설정

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

const Inputter2 = () => {
  let nums_init = Array.from({ length: 10 }, (v, k) => k);
  const [nums, setNums] = useState(nums_init);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handlePasswordChange = useCallback(
    (num) => {
      if (password.length === PASSWORD_MAX_LENGTH) {
        return;
      }
      setPassword(password + num.toString());
    },
    [password]
  );

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

  const onClickSubmitButton = () => {
    // 비밀번호 제출
    if (password.length === 0) {
      alert("비밀번호를 입력 후 눌러주세요!");
    } else {
      alert(password + "을 입력하셨습니다.");
    }
    localStorage.setItem("account_password", password);
    navigate("/CardList");
    
  };
  const id = localStorage.getItem('Pk');
  const [user_pk, setUserPk] = useState(id);
  const [account_password, setAccountPassword] = useState(password);
  const [bank, setBank] = useState(null);
  const [bank_account_number, setBankAccountNumber] = useState(null);
  const [cardNumberInput, setcardNumberInput] = useState(null);
  const [maxDateInput, setmaxDateInput] = useState(null);
  const [cvcInput, setvcInput] = useState(null);
  const [cardPasswordInput, setcardPasswordInput] = useState(null);
  const handleNextClick = async () => {
    try {
      const response = await api.postCard(
        user_pk,
        account_password,
        bank,
        bank_account_number,
        cardNumberInput,
        maxDateInput,
        cvcInput,
        cardPasswordInput
      );
      console.log("Card registration successful:", response);
    } catch (error) {
      console.error("Card registration error:", error);
    }
  };
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
      </div>
    </>
  );
};

export default Inputter2;
