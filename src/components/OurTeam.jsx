import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";
import team5 from "../assets/team5.jpg";
import team6 from "../assets/team6.jpg";

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
    <section className="py-20 text-base-content">
      <div className="max-w-[1440px] mx-auto px-4">
        <h2
          className="title text-center my-10
        "
        >
          Our Team
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            autoFill={true}
            style={{ willChange: "transform" }}
          >
            <div className="flex gap-8 transform-gpu">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`flex flex-col border border-primary/20 items-center bg-base-200/30 rounded-2xl shadow-md p-5 min-w-[200px] hover:scale-105 transition-transform cursor-pointer ${
                    index === 0 && "ml-5"
                  }`}
                >
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
              ))}
            </div>
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
