import React from 'react';
import Cardup from '../../Components/Brand,AristCard/Cardup';
import Carddown1 from '../../Components/Brand,AristCard/Carddown1';
import Carddown2 from '../../Components/Brand,AristCard/Carrddown2';
const Test = () => {
    return (
        <div>
            <Cardup name = "로제"
                    backimageUrl="/img/Artistimg/Backrose.png"
                    CircleimageUrl="/img/Artistimg/rose.jpg"></Cardup>
            <Carddown1 
                subcribeNum="452" 
                popNum="23"
                introduceText="  뉴질랜드 국적을 가진 최초의 K-POP 아이돌로써 화제가 됨과 동시에 박봄을 잇는 차세대 YG 걸그룹 음색깡패"
                >
            </Carddown1>
            <Cardup 
                name = "IAB STUDIO"
                backimageUrl="/img/Artistimg/iab_box.jpg"
                CircleimageUrl="/img/Artistimg/iablogo.png"></Cardup>
            <Carddown2
                toptext="빈지노의 새로운 노비츠키 한정판 팝업 스토어"
                bodytext="10년 만에 세상으로 모습을 들어낸 빈지노가 낸 음반 노비츠키를 한정판으로 판매할 예정이다. 앨범 발매기념 팝업 스토어는 3일 간 운영되고 집계된 의결을 바탕으로 지역을 선택하여 열릴 예정이다."
            ></Carddown2>
        </div>
    );
};

export default Test;