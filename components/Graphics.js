"use client";
import React from "react";

const graphics = [
  "/graphics/img4.jpg",
  "/graphics/img2.jpg",
  "/graphics/img3.png",
  "/graphics/img4.jpg",
  "/graphics/img5.png",
];

const ExpertSection = () => {
  return (
    <section className="bg-[#6f42c1] py-16 px-4 md:px-20 text-white font-['Montserrat']">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="inline-block bg-white text-black  text-3xl md:text-5xl px-6 py-2 rounded-full shadow-lg" style={{ fontFamily: "PeaceSans" }}>
          We are Expert In
        </h1>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/3 space-y-6">
          <div className="bg-white text-black text-xl md:text-2xl font-semibold px-6 py-4 rounded-full shadow-md text-center">
            Graphic designs
          </div>
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg text-sm">
            At Indocs Media, we craft compelling graphic designs that blend creativity with strategy. From branding to digital visuals, our designs captivate, communicate, and convert. Every pixel reflects our passion to make your brand stand out with impact and elegance.
          </div>
          <div
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              style={{ boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)" }}
            >
              <img
                src="/graphics/img1.png"
                alt={`Graphic`}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 grid grid-cols-3 gap-3">
  {/* Portrait Video */}
  <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
    <video
      src="/graphics/video1.mp4"
      autoPlay
      muted
      loop
      className="w-full h-full object-cover rounded-2xl"
      style={{ boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)" }}
    ></video>
  </div>

  {/* Landscape Image */}
  <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl transform hover:rotate-1 transition-all duration-300">
    <img
      src="/graphics/img2.png"
      alt="Landscape Graphic"
      className="w-full rounded-2xl"
    />
  </div>

  {/* Square Image 1 */}
  <div className="rounded-2xl overflow-hidden shadow-xl transform hover:-rotate-1 transition-all duration-300">
    <img
      src="/graphics/img5.png"
      alt="Square Graphic 1"
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>

  {/* Portrait Image */}
  <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
    <img
      src="/graphics/img4.jpg"
      alt="Portrait Graphic"
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>

  {/* Square Image 2 */}
  {/* <div className="rounded-2xl overflow-hidden shadow-xl transform hover:rotate-1 transition-all duration-300">
    <img
      src="/graphics/square2.jpg"
      alt="Square Graphic 2"
      className="w-full h-full object-cover rounded-2xl"
    />
  </div> */}

  {/* Landscape Image 2 */}
  <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl transform hover:-rotate-1 transition-all duration-300">
    <img
      src="/graphics/img3.png"
      alt="Landscape Graphic 2"
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default ExpertSection;
