import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
import "../assets/css/OurTeam.css"
// import "swiper/css";
// import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css';
import Narasimhulu from "../assets/images/Narasimhulu D.svg";
import Sridhar from "../assets/images/Sridhar D.svg";
import Rajesh from "../assets/images/Rajesh D.svg";
import Satya from "../assets/images/Satya narayan D.svg";
import Raju from "../assets/images/Raju D.svg";
import RamaReddy from "../assets/images/Jayaram D.svg";
import Manasa from "../assets/images/Manasa D.svg";
import Jagadeesh from "../assets/images/Jagadeesh D.svg";

const OurTeam = () => {
  const teamMembers = [
    { img: Narasimhulu },
    { img: Jagadeesh },
    { img: Sridhar },
    { img: Rajesh },
    { img: RamaReddy },
    { img: Raju },
    { img: Satya },
    { img: Manasa },
  ];

  return (
    <div className=" teamcard container-fluid">
    <h2 className="text align-center mt-5 pt-5" style={{textDecoration:"none", textAlign:"center",fontFamily:"Lexend"}}>Our Team</h2>
    <div className='team-carousel container-fluid ' >
          <Swiper
      modules={[Pagination, Autoplay]}
        slidesPerView={3} 
        centeredSlides={true}
        spaceBetween={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
        breakpoints={{
                       0: {
                         spaceBetween: 1,
                         slidesPerView: 1,
                       },
                       468: {
                         spaceBetween: 1,
                         slidesPerView: 1,
                       },
                       768: {
                        spaceBetween: 1,
                        slidesPerView: 3,
                      },
                      1024: {
                        spaceBetween: 1,
                        slidesPerView: 3,
                      },
                      1280: {
                        spaceBetween: 1,
                        slidesPerView: 3,
                      },
                    }}
        loop
        className="mySwiper"
      >
        {teamMembers.map((member, index) =>(
            <SwiperSlide key={index} className='swiper-slide ms-auto'>
                <div className="team-card" >
                    <img src={member.img} alt={member.name} className='img-fluid ' />
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
    </div>
    </div>
  );
};

export default OurTeam;
