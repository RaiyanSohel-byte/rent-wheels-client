import React from "react";
import HeroSection from "../components/home/HeroSection";
import TopRatedCars from "../components/home/TopRatedCars";
import FAQPreview from "../components/home/FAQPreview";
import CallToAction from "../components/home/CallToAction";
import AboutPreview from "../components/home/AboutPreview";
import CustomerTestimonials from "../components/home/CustomerTestimonials";
import WhyRentWithUs from "../components/home/WhyRentWithUs";
import LatestCars from "../components/home/LatestCars";

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
        <CustomerTestimonials />
        <AboutPreview />
        <FAQPreview />
        <CallToAction />
      </main>
    </>
  );
};

export default Home;
