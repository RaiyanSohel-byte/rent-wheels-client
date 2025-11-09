import React from "react";
import Marquee from "react-fast-marquee";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";
import team5 from "../assets/team5.jpg";

const teamMembers = [
  { name: "Raiyan Sohel", role: "Founder & CEO", img: team1 },
  { name: "Afnan Rahman", role: "CTO", img: team2 },
  { name: "Zahir Karim", role: "Lead Designer", img: team3 },
  { name: "Jahid Hasan", role: "Marketing Head", img: team4 },
  { name: "Rakib Chowdhury", role: "Sales Executive", img: team5 },
];

const OurTeam = () => {
  return (
    <section className="py-20 text-base-content">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="title text-center my-10
        "
        >
          Our Team
        </h2>

        <Marquee gradient={false} speed={50}>
          <div className="flex gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col border border-primary/30 items-center bg-base-200/60 backdrop-blur-md rounded-2xl shadow-lg p-5 min-w-[200px] hover:scale-105 transition-transform cursor-pointer ${
                  index === 0 ? "ml-5" : ""
                }`}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary"
                />
                <h3 className="text-lg font-semibold text-primary">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default OurTeam;
