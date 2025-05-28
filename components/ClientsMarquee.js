"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const clientLogos = [
  "/clients/img1.jpg",
  "/clients/img2.png",
];

const ClientsGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const isFewLogos = clientLogos.length <= 3;

  return (
    <section
      className="bg-black py-16 px-6 md:px-24"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div data-aos="fade-up" className="text-center mb-10 text-white">
        <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "PeaceSans" }}>
          Our Clients
        </h2>
        <p
          className="text-[#B2BABB] mt-4 text-sm md:text-base"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          Trusted by brands across industries
        </p>
      </div>

      {/* Flex Layout for better control */}
      <div
        data-aos="fade-up"
        className={`flex flex-wrap gap-6 sm:gap-10 items-center ${
          isFewLogos ? "justify-center" : "justify-around"
        }`}
      >
        {clientLogos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Client ${i + 1}`}
            className="h-25 md:h-25 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out rounded"
          />
        ))}
      </div>
    </section>
  );
};

export default ClientsGrid;
