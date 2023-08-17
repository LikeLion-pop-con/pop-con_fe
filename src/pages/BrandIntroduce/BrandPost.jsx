import { useOutletContext } from "react-router-dom";
import PostCard from "../../Components/Card/PostCard";
import styled from "styled-components";
import PopupTitle from "../../Components/PopupTitle/PopupTitle";
import Margin from "../../Components/Margin/Margin";
import { useState, useEffect} from "react";
import * as api from "../../api";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
`;

function BrandPost() {
  const params = useOutletContext();
  console.log(params.brandId);
  const [brandpop,setbrandpop] = useState([]);
  const navigate = useNavigate();
  const getbrandpost = async () => {
    const Postdata = await api.getbrandpost(params.brandId);
    setbrandpop(Postdata);
    console.log(Postdata);
  };
  useEffect(() => {
    getbrandpost();
  }, []);
  if (!brandpop || brandpop.length === 0) {
    return null;
  }
  const truncatedIntro = brandpop[0].brandpost_intro.length > 100
  ? brandpop[0].brandpost_intro.substring(0, 70) + "..."
  : brandpop[0].brandpost_intro;
  return (
    <Wrapper>
      <Margin height="20" />
      <PopupTitle text="브랜드 포스트" />
      <PostCard
          onClick={() => navigate(`/popuppost/?id=${params.brandId}`)}
          image={"https://popcon.store" + brandpop[0].brandpost_image}
          title={brandpop[0].brandpost_name}
          type="추천 포스트"
          main={truncatedIntro}
        />
    </Wrapper>
  );
}
export default BrandPost;
