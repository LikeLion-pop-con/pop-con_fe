import React from "react";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import * as api from "../../api";

const Wrapper = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
`;

const renderImages = (imagePaths) => {
  return imagePaths.map((imagePath, index) => (
    <Image key={index} src={imagePath} alt="팝업 이미지" />
  ));
};

const PopupBooking = () => {
  //백엔드에서 받아온 이미지 경로 배열 - 데이터 받아서 변수로 선언해야 할 듯

  const params = useLocation();

  const brandId = new URLSearchParams(params.search).get("id");
  const navigate = useNavigate();

  const [btnclicked, setBtnclicked] = useState(false);
  const [requestbtnclikced, setRequestbtnclicked] = useState(false);
  const [data, setData] = useState([]);

  const [isYes, setIsYes] = useState(false);

  const requestbtnani = useAnimation();

  useEffect(() => {
    if (btnclicked) {
      requestbtnani.start("visible");
    } else {
      requestbtnani.start("hidden");
    }
  }, [btnclicked]);

  return (
    <Wrapper transition={{ type: "tween" }}>
      <Outlet
        // context={{
        //   currentId: brandId,
        //   brand_info: data?.brand_info,
        //   popup_category: data?.popup_category,
        //   popup_state: data?.popup_state,
        //   popup_name: data?.popup_name,
        //   popup_simple_info: data?.popup_simple_info,
        //   popup_date: data?.popup_date,
        //   popup_time: data?.popup_time,
        //   popup_operation: data?.popup_operation,
        //   popup_detailplace: data?.popup_detailplace,
        //   popup_info: data?.popup_info,
        //   popup_add_info: data?.popup_add_info,
        //   popup_opendate: data?.popup_opendate,
        //   popup_closedate: data?.popup_closedate,
        //   popup_opentime: data?.popup_opentime,
        //   popup_closetime: data?.popup_closetime,
        //   popup_main_image: data?.popup_main_image,
        //   popup_brand_logo: data?.popup_brand_logo,
        //   popup_image01: data?.popup_image01,
        //   popup_image02: data?.popup_image02,
        //   popup_image03: data?.popup_image03,
        //   popup_image04: data?.popup_image04,
        //   popup_image05: data?.popup_image05,
        //   popup_image06: data?.popup_image06,
        //   popup_image07: data?.popup_image07,
        // }}
      />
    </Wrapper>
  );
};

export default PopupBooking;
