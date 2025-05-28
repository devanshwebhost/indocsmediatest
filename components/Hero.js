"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";

const images = ["/media/img1.png", "/media/clip1.mp4", "/media/img2.png"];

const Hero = () => {
  const [greeting, setGreeting] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Greeting based on time
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    // Auto change media every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderMedia = (media) => {
    if (media.endsWith(".mp4")) {
      return (
        <video
          key={media}
          autoPlay
          muted
          loop
          className="rounded-2xl shadow-xl w-full object-cover"
          src={media}
        />
      );
    } else {
      return (
        <img
          key={media}
          src={media}
          alt="Creative Work"
          className="rounded-2xl shadow-xl w-full object-cover"
        />
      );
    }
  };

  return (
    <section
      className=" md:h-[80vh] h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-24"
      style={{
        background: "linear-gradient(135deg, #8E44AD, #5E3370)",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {/* LEFT SIDE */}
      <div className="text-white md:w-1/2 space-y-6 relative" data-aos="">
        <p className="text-xl text-[#C39BD3] mt-10 text-center" style={{ fontFamily: "Poppins, sans-serif" }}>
          {greeting}, Welcome To
        </p>

        <div className="">
          <div className="flex flex-col md:items-center md:text-center relative z-10">

            <p className="uppercase text-sm tracking-widest text-[#FFFFFF] ml-1 text-center font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>INDOCS MEDIA</p>

            <h2
              className="text-4xl md:text-6xl  text-white drop-shadow-lg text-center"
              style={{ fontFamily: "PeaceSans" }}
            >
              WORLD
            </h2>

            <p className="text-lg text-[#C39BD3] ml-2.5 text-center font-bold">Of</p>

            <h2
              className="text-5xl md:text-7xl  text-white drop-shadow-lg text-center"
              style={{ fontFamily: "PeaceSans" }}
            >
              CREATIVITY
            </h2>
          </div>
        </div>

        <p className="text-lg text-[#C39BD3] ml-2.5 text-center">
          Creative. Strategic. Cinematic.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-[30vw] w-full mt-5 mb-10 md:mb-0 md:mt-0" data-aos="">
        {renderMedia(images[currentIndex])}
      </div>
    </section>
  );
};

export default Hero;
