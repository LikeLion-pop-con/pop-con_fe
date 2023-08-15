import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Typo from "../../assets/Typo";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
const Top = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3%;
`;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 2%;
  padding-bottom: 30px;
`;

const Title = styled.div`
  font-size: 29px;
  padding: 40px;
`;

const ResisterBox = styled.div`
  display: flex;
  margin: 5%;
  select:nth-child(2) {
    margin-left: 30px;
  }
  select:nth-child(3) {
    margin-left: 10px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  text-align: left;
  label {
    margin-bottom: 8px;
    margin-top: 20px;
  }
`;

const Input = styled.input`
  padding-left: 10px;
  width: 326px;
  height: 49px;
  border-radius: 8px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #333;
  background-color: #f9f9f9;
  outline: none;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #555;
  }

  &:focus {
    border-color: #ec7538;
    box-shadow: 0 0 0 2px rgba(236, 117, 56, 0.2);
  }
`;

const BackText = styled.p`
  margin: 5px;
`;

const LoginButton = styled.button`
  width: 326px;
  height: 48px;
  background-color: #ec7538;
  border: none;
  border-radius: 8px;
`;

const StyledSelect = styled.select`
  padding-left: 10px;
  width: 326px;
  height: 49px;
  border-radius: 8px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #333;
  background-color: #f9f9f9;
  outline: none;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #555;
  }

  &:focus {
    border-color: #ec7538;
    box-shadow: 0 0 0 2px rgba(236, 117, 56, 0.2);
  }

  appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpath d='M6 9l6 6 6-6'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 40px;
`;

const Resister = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [selectedProvince, setSelectedProvince] = useState("시/도 선택");
  const [selectedCity, setSelectedCity] = useState("");
  const password = React.useRef({});
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  password.current = watch("password", "");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isYes, setIsYes] = useState(false);
  const onRegisterFormSubmit = (data) => {
    const genderValue = data.gender === "Male" ? "1" : "2";
    const userTypeValue = data.userType === "Personal" ? "1" : "2";
    const requestData = {
      userID: data.email,
      password: data.password,
      user_type: userTypeValue,
      user_name: data.name,
      user_phonenum: data.phoneNumber,
      user_address: `${selectedProvince} ${selectedCity}`,
      user_gender: genderValue,
    };
    console.log(requestData);
    axios
      .post("https://popcon.store/signup/", requestData)
      .then((response) => {
        console.log(response); // 응답 데이터를 콘솔에 출력
        if (parseInt(response.status / 100) === 2) {
          yestoast();
          setIsEmailError(false); // 회원가입 완료 상태를 true로 변경
          navigate("/login"); // 로그인 페이지로 이동
        }
        console.log(response.status / 100);
      })
      .catch((err) => {
        console.log(err); // 오류 정보를 콘솔에 출력
        yestoast1();
      });
  };
  const yestoast = () =>
    toast.success("회원가입이 완료되었습니다.", {
      duration: 6000,
      style: {
        marginTop: 50,
      },
    });
  const yestoast1 = () =>
    toast.error("이메일이 중복되었습니다.", {
      duration: 6000,
      style: {
        marginTop: 50,
      },
    });
  const provinces = [
    "도/광역시 선택",
    "서울특별시",
    "인천광역시",
    "대전광역시",
    "광주광역시",
    "대구광역시",
    "울산광역시",
    "부산광역시",
    "경기도",
    "강원도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주도",
  ];
  const citiesByProvince = {
    "시/도 선택": [],
    서울특별시: [
      "강남구",
      "강동구",
      "강북구",
      "강서구",
      "관악구",
      "광진구",
      "구로구",
      "금천구",
      "노원구",
      "도봉구",
      "동대문구",
      "동작구",
      "마포구",
      "서대문구",
      "서초구",
      "성동구",
      "성북구",
      "송파구",
      "양천구",
      "영등포구",
      "용산구",
      "은평구",
      "종로구",
      "중구",
      "중랑구",
    ],
    인천광역시: [
      "계양구",
      "남구",
      "남동구",
      "동구",
      "부평구",
      "서구",
      "연수구",
      "중구",
      "강화군",
      "옹진군",
    ],
    대전광역시: ["대덕구", "동구", "서구", "유성구", "중구"],
    광주광역시: ["광산구", "남구", "동구", "북구", "서구"],
    대구광역시: [
      "남구",
      "달서구",
      "동구",
      "북구",
      "서구",
      "수성구",
      "중구",
      "달성군",
    ],
    울산광역시: ["남구", "동구", "북구", "중구", "울주군"],
    부산광역시: [
      "강서구",
      "금정구",
      "남구",
      "동구",
      "동래구",
      "부산진구",
      "북구",
      "사상구",
      "사하구",
      "서구",
      "수영구",
      "연제구",
      "영도구",
      "중구",
      "해운대구",
      "기장군",
    ],
    경기도: [
      "고양시",
      "과천시",
      "광명시",
      "광주시",
      "구리시",
      "군포시",
      "김포시",
      "남양주시",
      "동두천시",
      "부천시",
      "성남시",
      "수원시",
      "시흥시",
      "안산시",
      "안성시",
      "안양시",
      "양주시",
      "오산시",
      "용인시",
      "의왕시",
      "의정부시",
      "이천시",
      "파주시",
      "평택시",
      "포천시",
      "하남시",
      "화성시",
      "가평군",
      "양평군",
      "여주군",
      "연천군",
    ],
    강원도: [
      "강릉시",
      "동해시",
      "삼척시",
      "속초시",
      "원주시",
      "춘천시",
      "태백시",
      "고성군",
      "양구군",
      "양양군",
      "영월군",
      "인제군",
      "정선군",
      "철원군",
      "평창군",
      "홍천군",
      "화천군",
      "횡성군",
    ],
    충청북도: [
      "제천시",
      "청주시",
      "충주시",
      "괴산군",
      "단양군",
      "보은군",
      "영동군",
      "옥천군",
      "음성군",
      "증평군",
      "진천군",
      "청원군",
    ],
    충청남도: [
      "계룡시",
      "공주시",
      "논산시",
      "보령시",
      "서산시",
      "아산시",
      "천안시",
      "금산군",
      "당진군",
      "부여군",
      "서천군",
      "연기군",
      "예산군",
      "청양군",
      "태안군",
      "홍성군",
    ],
    전라북도: [
      "군산시",
      "김제시",
      "남원시",
      "익산시",
      "전주시",
      "정읍시",
      "고창군",
      "무주군",
      "부안군",
      "순창군",
      "완주군",
      "임실군",
      "장수군",
      "진안군",
    ],
    전라남도: [
      "광양시",
      "나주시",
      "목포시",
      "순천시",
      "여수시",
      "강진군",
      "고흥군",
      "곡성군",
      "구례군",
      "담양군",
      "무안군",
      "보성군",
      "신안군",
      "영광군",
      "영암군",
      "완도군",
      "장성군",
      "장흥군",
      "진도군",
      "함평군",
      "해남군",
      "화순군",
    ],
    경상북도: [
      "경산시",
      "경주시",
      "구미시",
      "김천시",
      "문경시",
      "상주시",
      "안동시",
      "영주시",
      "영천시",
      "포항시",
      "고령군",
      "군위군",
      "봉화군",
      "성주군",
      "영덕군",
      "영양군",
      "예천군",
      "울릉군",
      "울진군",
      "의성군",
      "청도군",
      "청송군",
      "칠곡군",
    ],
    경상남도: [
      "거제시",
      "김해시",
      "마산시",
      "밀양시",
      "사천시",
      "양산시",
      "진주시",
      "진해시",
      "창원시",
      "통영시",
      "거창군",
      "고성군",
      "남해군",
      "산청군",
      "의령군",
      "창녕군",
      "하동군",
      "함안군",
      "함양군",
      "합천군",
    ],
    제주도: ["서귀포시", "제주시", "남제주군", "북제주군"],
  };

  const handleProvinceChange = (event) => {
    const selectedProvince = event.target.value;
    setSelectedProvince(selectedProvince);
    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const validatePasswordConfirmation = (value) => {
    if (value === password.current) {
      return true;
    }
    return "비밀번호가 일치하지 않습니다.";
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  const handlePhoneNumberInput = (e) => {
    const phoneNumber = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 추출
    const formattedPhoneNumber = phoneNumber.replace(
      /(\d{3})(\d{4})(\d{4})/,
      "$1-$2-$3"
    ); // 010-0000-0000 형식으로 변경
    e.target.value = formattedPhoneNumber;
  };
  return (
    <form onSubmit={handleSubmit(onRegisterFormSubmit)}>
      <Top onClick={handleGoBack}>
        <BiArrowBack size={30} />
        <BackText>
          <Typo size="1.2rem" weight="400">
            뒤로
          </Typo>
        </BackText>
      </Top>
      <LoginBox>
        <Title>이메일로 시작하기</Title>
        <InputContainer>
          <label>이메일 (아이디)</label>
          <Input
            type="email"
            placeholder="wwww@naver.com"
            {...register("email", {
              required: "필수 항목입니다.",
              pattern: {
                value: emailRegex,
                message: "이메일 형식에 맞게 입력해주세요.",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <label>이름</label>
          <Input
            type="name"
            {...register("name", { required: true })}
            placeholder="홍길동"
          />
          {errors.name && <span>필수 항목입니다.</span>}

          <label>핸드폰 번호</label>
          <Input
            type="tel"
            {...register("phoneNumber", { required: true })}
            onInput={handlePhoneNumberInput}
            placeholder="숫자만 입력해주세요 (예: 01012345678)"
          />
          {errors.phoneNumber && <span>필수 항목입니다.</span>}

          <label>비밀번호</label>
          <Input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>필수 항목입니다.</span>}

          <label>비밀번호 확인</label>
          <Input
            type="password"
            {...register("passwordConfirm", {
              required: true,
              validate: validatePasswordConfirmation,
            })}
          />
          {errors.passwordConfirm && (
            <span>{errors.passwordConfirm.message}</span>
          )}

          {!errors.passwordConfirm &&
            !validatePasswordConfirmation(watch("passwordConfirm")) && (
              <span>비밀번호가 일치하지 않습니다.</span>
            )}

          <label>성별</label>
          <StyledSelect {...register("gender", { required: true })}>
            <option value="">-- 성별을 선택해주세요. --</option>
            <option value="Male">남</option>
            <option value="Female">여</option>
          </StyledSelect>
          {errors.gender && <span>필수 항목입니다.</span>}

          <label>사용자 종류</label>
          <StyledSelect {...register("userType", { required: true })}>
            <option value="">-- 종류를 선택해주세요. --</option>
            <option value="Personal">개인</option>
            <option value="Business">기업</option>
          </StyledSelect>
          {errors.userType && <span>필수 항목입니다.</span>}
        </InputContainer>

        <ResisterBox>
          <label>주소</label>
          <select value={selectedProvince} onChange={handleProvinceChange}>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
          {errors.residentialArea && <span>필수 항목입니다.</span>}

          <select value={selectedCity} onChange={handleCityChange}>
            {citiesByProvince[selectedProvince]?.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.residentialArea && <span>필수 항목입니다.</span>}
        </ResisterBox>

        <LoginButton type="submit">
          <Typo size="1.1rem" weight="600" color="white">
            시작하기
          </Typo>
        </LoginButton>
        <Toaster position="top-center" />
      </LoginBox>
    </form>
  );
};

export default Resister;
