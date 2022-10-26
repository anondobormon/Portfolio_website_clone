// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { data } from "../../utils/DemoData";
import PartnerSlider from "./PartnerSlider";
import "./Testimonial.scss";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="flex">
          <div className="left">
            <div className="title">
              We improve demand for efficiency and quality in entrepreneurship
              with creative mind
            </div>
          </div>
          <div className="right">
            <div className="slider">
              <Swiper
                spaceBetween={40}
                slidesPerView={1}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="card">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nulla, modi saepe eius laboriosam suscipit nam
                      reprehenderit atque vel eligendi non? Lorem ipsum dolor
                      sit amet consectetur, adipisicing elit. Nulla, modi saepe
                      eius laboriosam suscipit nam reprehenderit atque vel
                      eligendi non?
                    </p>

                    <div className="flex">
                      <div className="img_wrapper">
                        <img src={data.images.user} alt="" />
                      </div>
                      <div className="content">
                        <div className="sub_title">John Cartner</div>
                        <p>GMS Group</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nulla, modi saepe eius laboriosam suscipit nam
                      reprehenderit atque vel eligendi non? Lorem ipsum dolor
                      sit amet consectetur, adipisicing elit. Nulla, modi saepe
                      eius laboriosam suscipit nam reprehenderit atque vel
                      eligendi non?
                    </p>

                    <div className="flex">
                      <div className="img_wrapper">
                        <img src={data.images.user} alt="" />
                      </div>
                      <div className="content">
                        <div className="sub_title">John Cartner</div>
                        <p>GMS Group</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nulla, modi saepe eius laboriosam suscipit nam
                      reprehenderit atque vel eligendi non? Lorem ipsum dolor
                      sit amet consectetur, adipisicing elit. Nulla, modi saepe
                      eius laboriosam suscipit nam reprehenderit atque vel
                      eligendi non?
                    </p>

                    <div className="flex">
                      <div className="img_wrapper">
                        <img src={data.images.user} alt="" />
                      </div>
                      <div className="content">
                        <div className="sub_title">John Cartner</div>
                        <p>GMS Group</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="space50"></div>
        <div className="space50"></div>

        <PartnerSlider />
      </div>
    </div>
  );
}
