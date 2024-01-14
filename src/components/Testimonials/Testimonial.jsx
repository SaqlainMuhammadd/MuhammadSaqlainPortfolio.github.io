import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Saqlain did exactly what I asked, his work was of high quality, He asked appropriate questions which not only helped him but also helped me define my needs better, and responded quickly with edits. He is professional and easy to work with.",
    },
    {
      img: profilePic2,
      review:
        "Saqlain did a great job. Made modifications as requested, gave me options, was very quick with turnaround, very responsive and came up with a design that worked perfectly for me.",
    },
    {
      img: profilePic3,
      review:
        "Muhammad Saqlain was a pleasure to collaborate with. He demonstrated professionalism, promptly incorporated requested edits, and delivered a final product that exceeded our design expectations. We commend his efforts and eagerly anticipate future collaborations with him.",
    },
    {
      img: profilePic4,
      review:
        "Highly recommended. Exceeded expectations, on time and professional with elegant style and extra mile efforts. Very well done.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
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
