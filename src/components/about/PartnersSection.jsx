import React from "react";

const PartnersSection = () => {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6f/Audi_logo_detail.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3d/Nissan-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/Kia_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/9f/Honda_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Ford_logo_flat.svg",
  ];

  return (
    <section className="text-center">
      <h3 className="text-2xl font-semibold mb-8">Our Trusted Partners</h3>
      <div className="flex flex-wrap justify-center gap-10 opacity-80">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Car Logo"
            className="h-10 w-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
