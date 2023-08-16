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
    "//search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDJfMjYw%2FMDAxNjc3NjkwNDcyNTEz.4KyiHCVxJVZHXXxqWryzwFhbhHAZ41fN_VR0SVqRew8g.IQ36YVjUkCDHHlfWZGlxJ-gyoiAg-louf3yryae7Eocg.JPEG.bo752%2F333799038%25A3%25DF780805883406481%25A3%25DF5904715951227571043%25A3%25DFn.jpg&type=sc960_832",
    "img/Artistimg/rose2.jpg",
    "img/Artistimg/iab_box.jpg",
    "img/Artistimg/adidas.jpeg",
    "img/Artistimg/popcon.gif",
    "img/Artistimg/jennie.gif",
    "img/Artistimg/winter.jpeg",
    "img/Artistimg/jisoo.jpeg",
    "img/Artistimg/karina.jpeg",
    "img/Artistimg/winter2.jpeg",
    "img/Artistimg/rosejisoo.jpeg",
    "img/Artistimg/Tiffany.jpeg",
    "img/Artistimg/rose.jpg",
    "//search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDJfMjYw%2FMDAxNjc3NjkwNDcyNTEz.4KyiHCVxJVZHXXxqWryzwFhbhHAZ41fN_VR0SVqRew8g.IQ36YVjUkCDHHlfWZGlxJ-gyoiAg-louf3yryae7Eocg.JPEG.bo752%2F333799038%25A3%25DF780805883406481%25A3%25DF5904715951227571043%25A3%25DFn.jpg&type=sc960_832",
    "img/Artistimg/rose2.jpg",
    "img/Artistimg/iab_box.jpg",
    "img/Artistimg/adidas.jpeg",
    "img/Artistimg/jennie.gif",
    "img/Artistimg/winter.jpeg",
    "img/Artistimg/jisoo.jpeg",
    "img/Artistimg/karina.jpeg",
    "img/Artistimg/winter2.jpeg",
    "img/Artistimg/rosejisoo.jpeg",
    "img/Artistimg/Tiffany.jpeg",
    "img/Artistimg/rose.jpg",
    "//search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDJfMjYw%2FMDAxNjc3NjkwNDcyNTEz.4KyiHCVxJVZHXXxqWryzwFhbhHAZ41fN_VR0SVqRew8g.IQ36YVjUkCDHHlfWZGlxJ-gyoiAg-louf3yryae7Eocg.JPEG.bo752%2F333799038%25A3%25DF780805883406481%25A3%25DF5904715951227571043%25A3%25DFn.jpg&type=sc960_832",
    "img/Artistimg/rose2.jpg",
    "img/Artistimg/iab_box.jpg",
    "img/Artistimg/adidas.jpeg",
    "img/Artistimg/jennie.gif",
    "img/Artistimg/winter.jpeg",
    "img/Artistimg/jisoo.jpeg",
    "img/Artistimg/karina.jpeg",
    "img/Artistimg/winter2.jpeg",
    "img/Artistimg/rosejisoo.jpeg",
    "img/Artistimg/Tiffany.jpeg",
    "img/Artistimg/rose.jpg",
    "//search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDJfMjYw%2FMDAxNjc3NjkwNDcyNTEz.4KyiHCVxJVZHXXxqWryzwFhbhHAZ41fN_VR0SVqRew8g.IQ36YVjUkCDHHlfWZGlxJ-gyoiAg-louf3yryae7Eocg.JPEG.bo752%2F333799038%25A3%25DF780805883406481%25A3%25DF5904715951227571043%25A3%25DFn.jpg&type=sc960_832",
    "img/Artistimg/rose2.jpg",
    "img/Artistimg/iab_box.jpg",
    "img/Artistimg/adidas.jpeg",
    "img/Artistimg/jennie.gif",
    "img/Artistimg/winter.jpeg",
    "img/Artistimg/jisoo.jpeg",
    "img/Artistimg/karina.jpeg",
    "img/Artistimg/winter2.jpeg",
    "img/Artistimg/rosejisoo.jpeg",
    "img/Artistimg/Tiffany.jpeg",
    "img/Artistimg/rose.jpg",
    "//search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDJfMjYw%2FMDAxNjc3NjkwNDcyNTEz.4KyiHCVxJVZHXXxqWryzwFhbhHAZ41fN_VR0SVqRew8g.IQ36YVjUkCDHHlfWZGlxJ-gyoiAg-louf3yryae7Eocg.JPEG.bo752%2F333799038%25A3%25DF780805883406481%25A3%25DF5904715951227571043%25A3%25DFn.jpg&type=sc960_832",
    "img/Artistimg/rose2.jpg",
    "img/Artistimg/iab_box.jpg",
    "img/Artistimg/adidas.jpeg",
    "img/Artistimg/jennie.gif",
    "img/Artistimg/winter.jpeg",
    "img/Artistimg/jisoo.jpeg",
    "img/Artistimg/karina.jpeg",
    "img/Artistimg/winter2.jpeg",
    "img/Artistimg/rosejisoo.jpeg",
    "img/Artistimg/Tiffany.jpeg",
    "img/Artistimg/rose.jpg",
    "//search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDJfMjYw%2FMDAxNjc3NjkwNDcyNTEz.4KyiHCVxJVZHXXxqWryzwFhbhHAZ41fN_VR0SVqRew8g.IQ36YVjUkCDHHlfWZGlxJ-gyoiAg-louf3yryae7Eocg.JPEG.bo752%2F333799038%25A3%25DF780805883406481%25A3%25DF5904715951227571043%25A3%25DFn.jpg&type=sc960_832",
    "img/Artistimg/rose2.jpg",
    "img/Artistimg/iab_box.jpg",
    "img/Artistimg/adidas.jpeg",
    "img/Artistimg/jennie.gif",
    "img/Artistimg/winter.jpeg",
    "img/Artistimg/jisoo.jpeg",
    "img/Artistimg/karina.jpeg",
    "img/Artistimg/winter2.jpeg",
    "img/Artistimg/rosejisoo.jpeg",
    "img/Artistimg/Tiffany.jpeg",
    "img/Artistimg/rose.jpg",
    "//search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDJfMjYw%2FMDAxNjc3NjkwNDcyNTEz.4KyiHCVxJVZHXXxqWryzwFhbhHAZ41fN_VR0SVqRew8g.IQ36YVjUkCDHHlfWZGlxJ-gyoiAg-louf3yryae7Eocg.JPEG.bo752%2F333799038%25A3%25DF780805883406481%25A3%25DF5904715951227571043%25A3%25DFn.jpg&type=sc960_832",
    "img/Artistimg/rose2.jpg",
    "img/Artistimg/iab_box.jpg",
    "img/Artistimg/adidas.jpeg",
    "img/Artistimg/jennie.gif",
    "img/Artistimg/winter.jpeg",
    "img/Artistimg/jisoo.jpeg",
    "img/Artistimg/karina.jpeg",
    "img/Artistimg/winter2.jpeg",
    "img/Artistimg/rosejisoo.jpeg",
    "img/Artistimg/Tiffany.jpeg",
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
      video: "test.mp4",
      text: "아래와 같이 시작하세요",
      id: 1,
    },
    {
      title: "팝업 요청하기",
      video: "videosample.mp4",
      text: "아래와 같이 시작하세요",
      id: 2,
    },
    {
      title: "팝업 예매하기",
      video: "videosample.mp4",
      text: "아래와 같이 시작하세요",
      id: 3,
    },
  ],
});
export const istutorialOpend = atom({
  key: "istutorialOpend",
  default: true,
});
