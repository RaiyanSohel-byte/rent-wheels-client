import React from "react";
import HeroSection from "../components/HeroSection";
import Loader from "../components/Loader";
import TopRatedCars from "../components/TopRatedCars";
import CustomerTestimonials from "../components/CustomerTestimonials";
import WhyRentWithUs from "../components/WhyRentWithUs";
import AboutPreview from "../components/AboutPreview";
import FAQPreview from "../components/FAQPreview";
import CallToAction from "../components/CallToAction";
import LatestCars from "../components/LatestCars";
import CarBrandMarquee from "../components/CarBrandMarquee";

const Home = () => {
  return (
    <>
      <header>
        <HeroSection />
      </header>
      <main>
        <LatestCars />
        <WhyRentWithUs />
        <TopRatedCars />
        <CarBrandMarquee />
        <CustomerTestimonials />
        <AboutPreview />
        <FAQPreview />
        <CallToAction />
      </main>
    </>
  );
};

export default Home;
