import React from "react";
import Marquee from "react-fast-marquee";

const CarBrandMarquee = () => {
  const brands = [
    {
      name: "Toyota",
      logo: "https://cdn.vectorstock.com/i/1000v/56/66/toyota-brand-logo-car-symbol-with-name-white-vector-46155666.avif",
    },
    {
      name: "BMW",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    },
    {
      name: "Mercedes-Benz",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
    },

    {
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    },
    {
      name: "BMW",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    },
    {
      name: "Lamborghini",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/df/Lamborghini_Logo.svg",
    },
  ];

  return (
    <section className="py-12 mt-10">
      <h2 className="title text-center mb-10">Trusted by</h2>

      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={false}
        className="py-4"
      >
        <div className="flex items-center gap-16 px-6 transform-gpu">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
              />
              <p className="mt-2 text-sm font-medium text-primary">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default CarBrandMarquee;
