import { Container } from "./style";

import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header/Index";
import { CardDish } from "../../components/CardDish";

import { useState } from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FreeMode, Pagination, Navigation } from 'swiper/modules';


export function Home(){
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const data = [
        {},
        {},
        {},
    ]
    
    return(
        <Container>
            
            <SideMenu 
            menuIsOpen={menuIsOpen}
            onCloseMenu={() => setMenuIsOpen(false)}
            />
            
            <Header 
            onOpenMenu={() => setMenuIsOpen(true)}
            closeHeader={menuIsOpen}
            />

<Swiper
        slidesPerView={2}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <CardDish />   </SwiperSlide>
        <SwiperSlide> <CardDish />   </SwiperSlide>
        <SwiperSlide> <CardDish />   </SwiperSlide>
        <SwiperSlide> <CardDish />   </SwiperSlide>
        <SwiperSlide> <CardDish />   </SwiperSlide>
      </Swiper>

 

        </Container>
    )
}