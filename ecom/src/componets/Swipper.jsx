import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import "../style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// import required modules

import React from "react";

const Swipper = ({ arr }) => {
  return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </Container>
  );
};
const Container = styled.div``;

export default Swipper;
