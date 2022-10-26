import React from "react";
import { data } from "../../utils/DemoData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PartnerSlider() {
  return (
    <div className="partner_slider">
      <Swiper
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {data.partners.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="partner_img">
              <img src={item.img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
