import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";

const MapWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Map = styled.div`
  width: 80%;
  height: 400px;
  border-radius: 30px;
`;

function Kakaomap() {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new window.kakao.maps.LatLng(
        36.58985585923901,
        127.93652113042805
      ),
      level: 13,
    };

    const mapTypeControl = new window.kakao.maps.MapTypeControl();
    const zoomControl = new window.kakao.maps.ZoomControl();

    const map = new window.kakao.maps.Map(container, options);

    // 서울 : (37.56813164258918, 126.98514913782813)
    // 인천 : (37.45130623868385, 126.71465682462927)

    const seoul = new window.kakao.maps.Marker({
      map: map,
      position: new window.kakao.maps.LatLng(
        37.56813164258918,
        126.98514913782813
      ),
    });

    var markers = [
      seoul,
      seoul,
      new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(
          37.45130623868385,
          126.71465682462927
        ),
      }),
    ];

    window.kakao.maps.event.addListener(map, "click", function(mouseEvent) {
      var latlng = mouseEvent.latLng;
      console.log("click! " + latlng.toString());
    });

    const clusterer = new window.kakao.maps.MarkerClusterer({
      map: map,
      markers: markers,
      gridSize: 35,
      averageCenter: true,
      minLevel: 6,
      disableClickZoom: true,
      styles: [
        {
          width: "50px",
          height: "50px",

          color: "white",
          textAlign: "center",
          lineHeight: "54px",
          backgroundColor: "#ec7538",
          borderRadius: "50%",
          opacity: "0.8",
        },
      ],
    });

    function zoomIn() {
      // 현재 지도의 레벨을 얻어옵니다
      var level = map.getLevel();

      // 지도를 1레벨 내립니다 (지도가 확대됩니다)
      map.setLevel(level - 1);

      // 지도 레벨을 표시합니다
    }

    window.kakao.maps.event.addListener(clusterer, "clusterclick", function(
      cluster
    ) {
      console.log(cluster.getCenter().La);
      map.setCenter(
        new window.kakao.maps.LatLng(
          cluster.getCenter().Ma,
          cluster.getCenter().La
        )
      );
      zoomIn();
    });

    clusterer.setMinClusterSize(1);
    clusterer.setMinLevel(4);

    map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
  });

  return (
    <MapWrapper>
      <Map id="map"></Map>
    </MapWrapper>
  );
}
export default Kakaomap;
