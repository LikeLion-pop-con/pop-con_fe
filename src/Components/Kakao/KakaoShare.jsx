import { useEffect, useState } from "react";
import styled from "styled-components";
import * as api from "../../api";
import { useScroll } from "framer-motion";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  p {
    margin-left: 0.3rem;
  }
  img {
    width: 3rem;
    height: 3rem;
  }
`;
const { Kakao } = window;

function KakaoShare({ isSpace, title, info, image }) {
  // 배포한 웹 사이트 주소 나중에 넣을 것
  const realUrl = `https://popcon.likelion.app`;
  const resultUrl = "http://localhost:3000/";

  useEffect(() => {
    Kakao?.cleanup();
    Kakao?.init("bf0729e846bbbe9f4260cc5aa868e5f2");
    console.log(Kakao.isInitialized());

    shareKakao();
  }, []);

  const shareKakao = () => {
    Kakao.Share?.sendDefault({
      objectType: "feed",
      content: {
        title: `${title}`,
        description: `${info}`,
        imageUrl: `${image}`,
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: `${isSpace ? "공간" : "팝업"} 보러가기`,
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return;
}

export default KakaoShare;
