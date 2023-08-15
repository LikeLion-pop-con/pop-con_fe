import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useMotionValueEvent, useScroll } from "framer-motion";

const MapWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Map = styled.div`
  width: 80%;
  height: 200px;
  border-radius: 30px;
`;

function Kakaomap({ text }) {
  const { scrollY } = useScroll();
  const [viewing, setViewing] = useState(false);

  useMotionValueEvent(scrollY, "change", () => {
    if (scrollY > 0) {
      setViewing(true);
      console.log(scrollY);
    } else {
      setViewing(false);
    }
  });

  const getMap = async () => {
    const container = document.getElementById("map2"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new window.kakao.maps.LatLng(
        37.56813164258918,
        126.98514913782813
      ),
      level: 4,
    };

    const mapTypeControl = new window.kakao.maps.MapTypeControl();
    // const zoomControl = new window.kakao.maps.ZoomControl();

    const map = new window.kakao.maps.Map(container, options);

    // 서울 : (37.56813164258918, 126.98514913782813)
    // 인천 : (37.45130623868385, 126.71465682462927)

    // var geocoder = new window.kakao.maps.services.Places();

    // var callback = function(result, status) {
    //   if (status === window.kakao.maps.services.Status.OK) {
    //     console.log(result);

    //     var marker = new window.kakao.maps.Marker({
    //       map: map,
    //       position: new window.kakao.maps.LatLng(result[0]?.y, result[0]?.x),
    //     });

    //     map.setCenter(new window.kakao.maps.LatLng(result[0]?.y, result[0]?.x));
    //   }
    // };
    // geocoder.keywordSearch(text, callback);

    const key = process.env.REACT_APP_REST_API;
    const query = encodeURIComponent(text?.split("/")[0]);
    console.log(query);
    const response = await fetch(
      `https://dapi.kakao.com/v2/local/search/keyword?query=${query}`,
      {
        method: "GET",
        headers: {
          Authorization: `KakaoAK ${key}`,
        },
      }
    );
    const json = await response.json();

    console.log(json?.documents);

    var marker = new window.kakao.maps.Marker({
      map: map,
      position: new window.kakao.maps.LatLng(
        json?.documents[0]?.y,
        json?.documents[0]?.x
      ),
    });
    map.setCenter(
      new window.kakao.maps.LatLng(json?.documents[0]?.y, json?.documents[0]?.x)
    );

    map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
    // map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
  };

  useEffect(() => {
    getMap();
  }, []);

  return (
    <MapWrapper>
      <Map id="map2"></Map>
    </MapWrapper>
  );
}
export default Kakaomap;
