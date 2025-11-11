import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";
import team3 from "../../assets/team3.jpg";
import team4 from "../../assets/team4.jpg";
import team5 from "../../assets/team5.jpg";
import team6 from "../../assets/team6.jpg";

const teamMembers = [
  { name: "Raiyan Sohel", role: "Founder & CEO", img: team1 },
  { name: "Afnan Rahman", role: "CTO", img: team2 },
  { name: "Zahir Karim", role: "Lead Designer", img: team3 },
  { name: "Jahid Hasan", role: "Marketing Head", img: team4 },
  { name: "Rakib Chowdhury", role: "Sales Executive", img: team5 },
  { name: "Arman Hossain", role: "HR Manager", img: team6 },
];

const OurTeam = () => {
  return (
    <section className="py-20 text-base-content text-center ">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="mb-10 space-y-4">
          <h2 className="title">Our Team</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Meet the passionate minds driving our success.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center border border-primary/20 bg-base-200/30 rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-105 transition-transform text-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary"
                  />
                  <h3 className="text-lg font-semibold text-primary">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
