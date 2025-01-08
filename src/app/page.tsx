"use client";

import Image from "next/image";
import { FaHandHoldingUsd, FaStar, FaBoxOpen } from "react-icons/fa";
import logo from "@/public/logo_2.png";
import digital2 from "@/public/digital_landing_2.jpg";
import NavigationBarLanding from "@/components/NavbarLanding";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;

    setScrollProgress(progress);

    setShowButton(scrollTop > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: digitalizingRef, inView: digitalizingInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: advantagesRef, inView: advantagesInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="bg-white text-gray-800">
      <NavigationBarLanding />
      {/* Header Section */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-[80%] mx-auto flex flex-row gap-5 justify-center h-[90vh] text-gray-800 text-left px-5"
      >
        <div>
          <Image
            src={logo}
            alt="logo"
            width={600}
            height={600}
            className="max-w-[600px]"
            objectFit="contain"
          />
        </div>
        <div className="flex pt-40 flex-col gap-4 max-w-[50%]">
          <span className="text-4xl font-semibold tracking-wide  leading-relaxed">
            Welcome to ByteCraft – Where Innovation Meets Impact
          </span>
          <span className="text-base tracking-wide font-light my-2">
            At ByteCraft, we’re passionate about turning ideas into reality.
            Whether you need cutting-edge social media strategies or a
            custom-built website that stands out, we’re here to craft digital
            solutions tailored to your success.
          </span>
        </div>
      </motion.div>

      {/* Solusi Digitalizing */}
      <motion.div
        ref={digitalizingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: digitalizingInView ? 1 : 0,
          y: digitalizingInView ? 0 : 50,
        }}
        transition={{ duration: 0.8 }}
        className="bg-primary flex flex-col justify-center h-screen relative overflow-hidden"
      >
        <div className="max-w-[80%] mx-auto flex text-4xl mb-20 flex-col gap-5 justify-center text-white text-left px-5">
          Byte by Byte, We Build Your Digital Future
        </div>
        <div className="flex flex-row gap-12 mt-6 max-w-[80%] justify-center text-white mx-auto">
          <div>
            <Image
              src={digital2}
              alt="Digital"
              width={400}
              height={400}
              className="shadow-lg rounded-md "
            />
          </div>
          <div className="flex flex-col gap-4 max-w-[50%]">
            <span className="text-2xl font-semibold tracking-wide">
              Explore our services
            </span>
            <span className="text-base tracking-wide font-light my-2">
              Explore our services, ignite your brand, and let’s shape the
              future—together. Byte by Byte, We Build Your Digital Future
            </span>
          </div>
        </div>
      </motion.div>

      {/* Keunggulan Platform Section */}
      <div className="bg-secondary text-gray-800 flex flex-col justify-center h-screen relative overflow-hidden">
        <motion.div
          ref={advantagesRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: advantagesInView ? 1 : 0,
            y: advantagesInView ? 0 : 50,
          }}
          transition={{ duration: 0.8 }}
          className="px-10 max-w-[80%] mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-32 ">
            Our Key Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-8 items-center text-center">
              <FaBoxOpen size={40} />
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-semibold">Nice</div>
                <p className="text-lg font-extralight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-center text-center">
              <FaStar size={40} />
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-semibold">Good</div>
                <p className="text-lg font-extralight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-center text-center">
              <FaHandHoldingUsd size={40} />
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-semibold">Great</div>
                <p className="text-lg font-extralight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                </p>
              </div>
            </div>
          </div>
        </motion.div>{" "}
      </div>

      <div className="fixed bottom-4 right-4 flex flex-col items-center space-y-2">
        {/* Progress bar */}
        {showButton && (
          <div className="w-10 h-10 relative">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 36 36"
            >
              <path
                d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#F4B2BA1A"
                strokeWidth="2"
              />
              <path
                d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#F4B2BA"
                strokeWidth="2"
                strokeDasharray={`${scrollProgress}, 100`}
              />
            </svg>
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={scrollToTop}
            >
              <span className="text-[#F4B2BA] text-lg">↑</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
