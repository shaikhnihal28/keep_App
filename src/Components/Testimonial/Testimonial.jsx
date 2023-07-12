import React from "react";
import "../Testimonial/Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import portfolioPic1 from "../../images/profile1.jpg";
import portfolioPic2 from "../../images/profile2.jpg";
import portfolioPic3 from "../../images/profile3.jpg";
import portfolioPic4 from "../../images/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
  const clients = [
    {
      img: portfolioPic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quam eaque! Doloribus optio harum, inventore fuga autem debitis ipsa nemo recusandae illo adipisci rerum, eos, cumque officiis! Iste, dolore ullam!",
    },
    {
      img: portfolioPic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quam eaque! Doloribus optio harum, inventore fuga autem debitis ipsa nemo recusandae illo adipisci rerum, eos, cumque officiis! Iste, dolore ullam!",
    },
    {
      img: portfolioPic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quam eaque! Doloribus optio harum, inventore fuga autem debitis ipsa nemo recusandae illo adipisci rerum, eos, cumque officiis! Iste, dolore ullam!",
    },
    {
      img: portfolioPic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quam eaque! Doloribus optio harum, inventore fuga autem debitis ipsa nemo recusandae illo adipisci rerum, eos, cumque officiis! Iste, dolore ullam!",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Client alwayes get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
