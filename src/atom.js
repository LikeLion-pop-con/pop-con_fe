import { atom } from "recoil";

export const PopupCategory = atom({
  key: "PopupCategory",
  default: ["팝업 스토어", "팝업 갤러리", "팝업 스테이지", "팝업 클래스"],
});

export const adImgs = atom({
  key: "adImgs",
  default: [
    "img/Artistimg/rose.jpg",
    "img/Artistimg/iab_box.jpg",
    "img/Artistimg/iablogo.png",
    "img/Artistimg/rose.jpg",
    "img/Artistimg/iab_box.jpg",
    "img/Artistimg/iablogo.png",
    "img/Artistimg/rose.jpg",
    "img/Artistimg/iab_box.jpg",
    "img/Artistimg/iablogo.png",
    "img/Artistimg/rose.jpg",
    "img/Artistimg/iab_box.jpg",
    "img/Artistimg/iablogo.png",
    "img/Artistimg/rose.jpg",
    "img/Artistimg/iab_box.jpg",
    "img/Artistimg/iablogo.png",
    "img/Artistimg/rose.jpg",
    "img/Artistimg/iab_box.jpg",
    "img/Artistimg/iablogo.png",
    "img/Artistimg/rose.jpg",
    "img/Artistimg/iab_box.jpg",
    "img/Artistimg/iablogo.png",
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
