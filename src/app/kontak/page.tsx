"use client";

import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import NavigationBarLanding from "@/components/NavbarLanding";
import { dummyCompanySettings } from "@/data/dummyData";
import contact from "@/public/pixel_people.png";
import love from "@/public/love_pixel.png";
import Image from "next/image";

const HalamanKontak = () => {
  const { emails, whatsapp_no } = dummyCompanySettings;

  const generateWhatsappLink = () => {
    if (whatsapp_no.startsWith("0")) {
      return `https://wa.me/62${whatsapp_no.slice(1)}`;
    } else if (whatsapp_no.startsWith("62")) {
      return `https://wa.me/${whatsapp_no}`;
    } else if (whatsapp_no.startsWith("+62")) {
      return `https://wa.me/${whatsapp_no.slice(1)}`;
    } else {
      return undefined;
    }
  };

  return (
    <div>
      <NavigationBarLanding />
      <div className="min-h-screen bg-gradient-to-bl from-white via-white via-50% to-secondary">
        <div className="mx-auto max-w-[90%] px-6 py-12 flex flex-row gap-10">
          <div>
            <h1 className="text-center text-4xl font-semibold text-gray-700 mb-2">
              Contact Us Now
            </h1>

            <p className="text-center text-base font-extralight text-gray-700 mb-4">
              Lets start our journey together!
            </p>
            <div className="flex flex-row">
              <Image
                src={contact}
                alt="contact"
                width={400}
                height={500}
                className="max-w-[400px]"
                objectFit="contain"
              />
              <Image
                src={love}
                alt="love"
                width={500}
                height={400}
                className="max-w-[500px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-20 min-w-[400px]">
            <div className="flex flex-col items-center text-center border rounded-lg shadow-lg p-6 bg-white">
              <FaEnvelope className="text-secondary text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Email
              </h3>
              {emails.map((email, index) => (
                <p key={index} className="text-gray-700">
                  {email}
                </p>
              ))}
            </div>

            <div className="flex flex-col items-center text-center border rounded-lg shadow-lg p-6 bg-white">
              <FaWhatsapp className="text-secondary text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                WhatsApp
              </h3>
              <div>{whatsapp_no}</div>
              <a
                href={generateWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Chat sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalamanKontak;
