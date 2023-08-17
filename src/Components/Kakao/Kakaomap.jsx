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
  height: ${(props) => (props.isTwo ? "250px" : "400px")};
  border-radius: 30px;
`;

function Kakaomap({
  isOne,
  isTwo,
  text,
  Seoul,
  Busan,
  Chungcheongbuk_Province,
  Chungcheongnam_Province,
  Daegu,
  Daejeon,
  Gangwon_Province,
  Gwangju,
  Gyeonggi_Province,
  Gyeongsangbuk_Province,
  Gyeongsangnam_Province,
  Incheon,
  Jeju_Special_Self_Governing_Province,
  Jeollabuk_Province,
  Jeollanam_Province,
  Sejong,
  Ulsan,
}) {
  let markers = [];

  const level1 = 13;
  const level2 = 4;

  const getMap = async () => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

    if (isOne) {
      const options = {
        center: new window.kakao.maps.LatLng(
          36.58985585923901,
          127.93652113042805
        ),
        level: level1,
      };

      const mapTypeControl = new window.kakao.maps.MapTypeControl();
      const zoomControl = new window.kakao.maps.ZoomControl();

      const map = new window.kakao.maps.Map(container, options);

      for (let i = 0; i < Seoul; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(
              37.56813164258915,
              126.98514913782823
            ),
          })
        );
      }
      for (let i = 0; i < Busan; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(
              35.186673494836576,
              129.08363054049286
            ),
          })
        );
      }
      for (let i = 0; i < Gyeongsangnam_Province; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(35.4606, 128.2132),
          })
        );
      }
      for (let i = 0; i < Gyeongsangbuk_Province; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(36.664013, 128.434296),
          })
        );
      }
      for (let i = 0; i < Daegu; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(35.8714354, 128.601445),
          })
        );
      }
      for (let i = 0; i < Daejeon; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(36.3504119, 127.3845475),
          })
        );
      }
      for (let i = 0; i < Gangwon_Province; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(37.555837, 128.209315),
          })
        );
      }
      for (let i = 0; i < Gwangju; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(35.1595454, 126.8526012),
          })
        );
      }
      for (let i = 0; i < Gyeonggi_Province; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(37.567167, 127.190292),
          })
        );
      }
      for (let i = 0; i < Chungcheongbuk_Province; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(
              36.988094179528,
              127.92606617289
            ),
          })
        );
      }
      for (let i = 0; i < Chungcheongnam_Province; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(35.160337, 126.824799),
          })
        );
      }
      for (let i = 0; i < Jeollabuk_Province; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(35.7175, 127.153),
          })
        );
      }
      for (let i = 0; i < Jeollanam_Province; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(36.820279, 127.10495),
          })
        );
      }
      for (let i = 0; i < Jeju_Special_Self_Governing_Province; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(33.4996213, 126.5311884),
          })
        );
      }
      for (let i = 0; i < Incheon; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(37.456255, 126.7052062),
          })
        );
      }
      for (let i = 0; i < Sejong; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(36.5040736, 127.249485),
          })
        );
      }
      for (let i = 0; i < Ulsan; ++i) {
        markers.push(
          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(35.5383773, 129.3113596),
          })
        );
      }
      console.log(markers);

      window.kakao.maps.event.addListener(map, "click", function(mouseEvent) {
        var latlng = mouseEvent.latLng;
        console.log("click! " + latlng.toString());
      });

      const clusterer = new window.kakao.maps.MarkerClusterer({
        map: map,
        markers: markers,
        gridSize: 30,
        averageCenter: true,
        minLevel: 12,
        setMinClusterSize: 2,
        disableClickZoom: true,
        styles: [
          {
            width: "50px",
            height: "50px",

            color: "white",
            textAlign: "center",
            lineHeight: "50px",
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

      map.addControl(
        mapTypeControl,
        window.kakao.maps.ControlPosition.TOPRIGHT
      );
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
    }
    if (isTwo) {
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
      const query = encodeURIComponent(
        text?.includes("/") ? text?.split("/")[0] : text
      );

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
        new window.kakao.maps.LatLng(
          json?.documents[0]?.y,
          json?.documents[0]?.x
        )
      );

      map.addControl(
        mapTypeControl,
        window.kakao.maps.ControlPosition.TOPRIGHT
      );
      // map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
    }
  };

  useEffect(() => {
    getMap();
  });

  return (
    <MapWrapper>
      <Map isTwo={isTwo} id="map"></Map>
    </MapWrapper>
  );
}
export default Kakaomap;
