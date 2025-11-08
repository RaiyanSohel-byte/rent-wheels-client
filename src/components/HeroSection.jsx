import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import heroCar1 from "../assets/heroCar1.jpg";
import heroCar2 from "../assets/heroCar2.jpg";
import heroCar3 from "../assets/heroCar3.jpg";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: "Drive Your Dream Car Today",
      subtitle: "Find affordable rentals from trusted local providers.",
      img: heroCar1,
    },
    {
      id: 2,
      title: "Explore Without Limits",
      subtitle: "Choose from luxury, electric, and family-friendly options.",
      img: heroCar2,
    },
    {
      id: 3,
      title: "Seamless Booking Experience",
      subtitle: "Rent. Drive. Enjoy. All in one smooth process.",
      img: heroCar3,
    },
  ];

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={2500}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                <motion.h1
                  key={slide.id + "-title"}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl font-bold mb-4 text-white"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  key={slide.id + "-subtitle"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn bg-gray-200 text-gray-800"
                >
                  Browse Cars
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
