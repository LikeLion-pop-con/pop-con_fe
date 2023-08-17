import { atom } from "recoil";
import cate1 from "../src/assets/Icons/Cate/food.png";
import cate2 from "../src/assets/Icons/Cate/fashion.png";
import cate3 from "../src/assets/Icons/Cate/tech.png";
import cate4 from "../src/assets/Icons/Cate/beauty.png";
import cate5 from "../src/assets/Icons/Cate/class.png";
import cate6 from "../src/assets/Icons/Cate/art.png";
import cate7 from "../src/assets/Icons/Cate/novel.png";
import cate8 from "../src/assets/Icons/Cate/video.png";
import cate9 from "../src/assets/Icons/Cate/music.png";

export const PopupCategory = atom({
  key: "PopupCategory",
  default: ["팝업 스토어", "팝업 갤러리", "팝업 스테이지", "팝업 클래스"],
});

export const adImgs = atom({
  key: "adImgs",
  default: [
    "img/Artistimg/rose.jpg",
    "img/ad/likelion2.png",
    "img/ad/modernLion.png",
    "img/ad/bacchus.jpg",
    "img/ad/cloop.jpg",
    "img/ad/dear.jpg",
    "img/ad/deepinSight.jpeg",
    "img/ad/dob.png",
    "img/ad/eventUs.jpg",
    "img/ad/FRIP.jpg",
    "img/ad/hyphen.jpeg",
    "img/ad/konkrit.png",
    "img/ad/navercloud.jpg",
    "img/ad/neroacs.jpg",
    "img/ad/nft.png",
    "img/ad/techit.png",
    "img/ad/TIDY-B.jpeg",
    "img/Artistimg/rose.jpg",
    "img/ad/likelion2.png",
    "img/ad/modernLion.png",
    "img/ad/bacchus.jpg",
    "img/ad/cloop.jpg",
    "img/ad/dear.jpg",
    "img/ad/deepinSight.jpeg",
    "img/ad/dob.png",
    "img/ad/eventUs.jpg",
    "img/ad/FRIP.jpg",
    "img/ad/hyphen.jpeg",
    "img/ad/konkrit.png",
    "img/ad/navercloud.jpg",
    "img/ad/neroacs.jpg",
    "img/ad/nft.png",
    "img/ad/techit.png",
    "img/ad/TIDY-B.jpeg",
    "img/Artistimg/rose.jpg",
    "img/ad/likelion2.png",
    "img/ad/modernLion.png",
    "img/ad/bacchus.jpg",
    "img/ad/cloop.jpg",
    "img/ad/dear.jpg",
    "img/ad/deepinSight.jpeg",
    "img/ad/dob.png",
    "img/ad/eventUs.jpg",
    "img/ad/FRIP.jpg",
    "img/ad/hyphen.jpeg",
    "img/ad/konkrit.png",
    "img/ad/navercloud.jpg",
    "img/ad/neroacs.jpg",
    "img/ad/nft.png",
    "img/ad/techit.png",
    "img/ad/TIDY-B.jpeg",
    "img/Artistimg/rose.jpg",
    "img/ad/likelion2.png",
    "img/ad/modernLion.png",
    "img/ad/bacchus.jpg",
    "img/ad/cloop.jpg",
    "img/ad/dear.jpg",
    "img/ad/deepinSight.jpeg",
    "img/ad/dob.png",
    "img/ad/eventUs.jpg",
    "img/ad/FRIP.jpg",
    "img/ad/hyphen.jpeg",
    "img/ad/konkrit.png",
    "img/ad/navercloud.jpg",
    "img/ad/neroacs.jpg",
    "img/ad/nft.png",
    "img/ad/techit.png",
    "img/ad/TIDY-B.jpeg",
  ],
});

export const isCateClicked = atom({
  key: "isCateClicked",
  default: false,
});

export const isBotClicked = atom({
  key: "isBotClicked",
  default: false,
});

export const isPopupRequestYes = atom({
  // 팝업 요청하기에서 Yes
  key: "isPopupRequestYes",
  default: false,
});

export const isPopupRequestNo = atom({
  // 팝업 요청하기에서 No
  key: "isPopupRequestYes",
  default: false,
});
export const isBrandOrArtist = atom({
  key: "isBrandOrArtist",
  default: true,
});
export const brandCateImg = atom({
  key: "brandCateImg",
  default: [cate1, cate2, cate3, cate4, cate5, cate6, cate7, cate8, cate9],
});
export const tutorial = atom({
  key: "tutorialTitle",
  default: [
    {
      title: "시작하기",
      video: "intro.gif",
      text: [
        { word: "팝업 스토어에 들어가볼까요", id: 1 },
        { word: "예매하고 싶은 팝업을 선택합니다.", id: 2 },
        { word: "예약하기 버튼을 눌러 장소 및 시간을 확인합니다.", id: 3 },
        { word: "최종 확인 버튼을 누르면 예약 완료 !", id: 4 },
      ],
      id: 1,
    },
    {
      title: "팝업 요청하기",
      video: "videosample.mp4",
      text: [
        { word: "팝업 스토어에 들어가볼까요", id: 1 },
        { word: "예매하고 싶은 팝업을 선택합니다.", id: 2 },
        { word: "예약하기 버튼을 눌러 장소 및 시간을 확인합니다.", id: 3 },
        { word: "최종 확인 버튼을 누르면 예약 완료 !", id: 4 },
      ],
      id: 2,
    },
    {
      title: "팝업 예매하기",
      video: "videosample.mp4",
      text: [
        { word: "팝업 스토어에 들어가볼까요", id: 1 },
        { word: "예매하고 싶은 팝업을 선택합니다.", id: 2 },
        { word: "예약하기 버튼을 눌러 장소 및 시간을 확인합니다.", id: 3 },
        { word: "최종 확인 버튼을 누르면 예약 완료 !", id: 4 },
      ],
      id: 3,
    },
  ],
});
export const istutorialOpend = atom({
  key: "istutorialOpend",
  default: true,
});

export const isClicked = atom({
  key: "isClicked",
  default: [0, 0, 0, 0, 0, 0],
});
