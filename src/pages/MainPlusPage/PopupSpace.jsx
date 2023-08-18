import styled from "styled-components";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import Typo from "../../assets/Typo";
import Margin from "../../Components/Margin/Margin";
import PostCard from "../../Components/Card/PostCard";
import PostCardimg1 from "../../assets/Icons/Card/PostCardimg1.png";
import Footer from "../../Components/Footer/Footer";
import PostCardimg2 from "../../assets/Icons/Card/PostCardimg2.jpg";
import NavigationBar from "../../Components/Navigate/Navigate";
import AdminCard from "../../Components/Card/AdminCard";
import AdminCardimg from "../../assets/Icons/Card/AdminCardimg.png";
import Modal from "../../Components/Modal/Modal";
import SpacePopup from "../../Components/Card/SpacePopup";
import * as api from "../../api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Title = styled.div`
  width: 100%;
  padding-left: 1.5rem;
`;
const PopupWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
`;
const CardBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  white-space: pre-line; // \n를 css에 적용시키려면 필요한 코드
`;

function PopupSpace() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [placepopup, setplacepopup] = useState([]);
  const [isCardLiked, setIsCardLiked] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getPopupplace();
  }, []);
  const getPopupplace = async () => {
    const placepopup = await api.getPopupplace();
    setplacepopup(placepopup);
    console.log(placepopup);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Header left="logo" right={["login", "search"]} />
      <Margin height="40" />
      <Title>
        <Typo fontType="large">팝업 공간 대여</Typo>
      </Title>
      <Margin height="20" />
      <CardBlock>
        {placepopup?.map((item) => (
          <AdminCard
            id={item?.id}
            onClick={() => navigate(`/popupspace/${item.id}`)}
            image={"https://popcon.store" + item?.popup_place_image01}
            title={item?.popup_place_title}
            space={item?.popup_place_location}
            floor={item?.popup_place_floor}
            area={"연면적 : " + item?.popup_place_area}
          />
        ))}
      </CardBlock>
      <div>
        <Modal isOpen={isModalOpen} closeModal={closeModal} />
      </div>

      <NavigationBar />
      <Footer />
    </div>
  );
}
export default PopupSpace;
