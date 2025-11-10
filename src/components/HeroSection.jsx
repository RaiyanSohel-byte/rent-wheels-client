import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heroCar1 from "../assets/heroCar1.jpg";
import heroCar2 from "../assets/heroCar2.jpg";
import heroCar3 from "../assets/heroCar3.jpg";
import { Link, useNavigate } from "react-router";
import useSearch from "../hooks/useSearch";
import { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroSection = () => {
  const navigate = useNavigate();
  const { setSearch } = useSearch();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.searchText.value);
    navigate("/browseCars");
  };

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

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section className="relative w-full h-[80vh] lg:h-[100vh] overflow-hidden">
      {swiperReady && (
        <Swiper
          modules={[Navigation, EffectFade, Pagination]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={{ clickable: true }}
          effect="fade"
          speed={1000}
          loop={true}
          observer={true}
          observeParents={true}
          className="h-full"
          onSwiper={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          }}
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
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <button
        ref={prevRef}
        className="absolute cursor-pointer  top-1/2 left-4 md:left-8 z-40 transform -translate-y-1/2 p-3 md:p-4 bg-white/40 hover:bg-white/70 text-white rounded-full shadow-lg transition-all hidden md:block"
      >
        <FaChevronLeft className="text-2xl md:text-3xl" />
      </button>
      <button
        ref={nextRef}
        className="absolute cursor-pointer top-1/2 right-4 md:right-8 z-40 transform -translate-y-1/2 p-3 md:p-4 bg-white/40 hover:bg-white/70 text-white rounded-full shadow-lg transition-all hidden md:block"
      >
        <FaChevronRight className="text-2xl md:text-3xl" />
      </button>

      <div className="absolute bottom-18 md:bottom-40 left-1/2 transform -translate-x-1/2 w-[90%] max-w-xl z-30">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex items-center bg-gray-200 rounded-md  shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
            <input
              type="text"
              name="searchText"
              placeholder="Search by car name..."
              className="bg-transparent placeholder:text-gray-600 w-full rounded-r-none px-5 py-3 text-gray-800 outline-none rounded-md "
            />
            <button
              type="submit"
              className="bg-gray-800 text-white rounded-md rounded-l-none px-6 py-3 cursor-pointer font-medium hover:bg-gray-700 transition-all"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex justify-center my-5">
          <Link
            to="/browseCars"
            className="btn bg-gray-100 text-gray-800 hover:bg-white border-none transition-all duration-300"
          >
            Browse Cars
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
