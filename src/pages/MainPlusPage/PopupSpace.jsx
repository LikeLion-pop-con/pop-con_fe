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
    white-space: pre-line;// \n를 css에 적용시키려면 필요한 코드
`   

function PopupSpace() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <>
      
      <Header left="logo" right={["login", "search"]} />
      <Margin height="40" />
      <Title>
        <Typo fontType="large">팝업 공간 대여</Typo>
      </Title>
      <Margin height="20" />
      <CardBlock>

        <AdminCard 
            image={AdminCardimg} 
            title='IAB studio & Lee 팝업 스토어 현장' 
            space='서울 마포구 양화로' 
            floor='지하 3 층 ~ 지상 15 층'
            area='연면적 : 277.686㎡'/>

        <AdminCard 
            image={AdminCardimg} 
            title='IAB studio & Lee 팝업 스토어 현장' 
            space='서울 마포구 양화로' 
            floor='지하 3 층 ~ 지상 15 층'
            area='연면적 : 277.686㎡'/>

        <AdminCard 
            image={AdminCardimg} 
            title='IAB studio & Lee 팝업 스토어 현장' 
            space='서울 마포구 양화로' 
            floor='지하 3 층 ~ 지상 15 층'
            area='연면적 : 277.686㎡'/>

        <AdminCard 
            image={AdminCardimg} 
            title='IAB studio & Lee 팝업 스토어 현장' 
            space='서울 마포구 양화로' 
            floor='지하 3 층 ~ 지상 15 층'
            area='연면적 : 277.686㎡'/>   

      </CardBlock>
      <div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      </div>
      
      <NavigationBar/>
      <Footer/>
    </>
  );
}
export default PopupSpace;
