"use client";

import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaBuilding } from "react-icons/fa";
import NavigationBarLanding from "@/components/NavbarLanding";
import { dummyCompanySettings } from "@/data/dummyData";
import { capitalizeFirstLetter } from "@/helper/formatText";
import contact from "@/public/contact.png";
import Image from "next/image";

const HalamanKontak = () => {
  const { emails, phones, whatsapp_no, company_address } = dummyCompanySettings;

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
      <div className="min-h-screen pt-20 bg-gradient-to-bl from-white via-white via-50% to-secondary">
        <div className="mx-auto max-w-[80%] px-6 py-12 flex flex-row gap-10">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Email Section */}
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
              {/* Phone Section */}
              <div className="flex flex-col items-center text-center border rounded-lg shadow-lg p-6 bg-white">
                <FaPhone className="text-secondary text-3xl mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Telepon
                </h3>
                {phones.map((phoneNumber, index) => (
                  <p key={index} className="text-gray-700">
                    {phoneNumber}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* WhatsApp Section */}
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
              {/* Office Address Section */}
              <div className="flex flex-col items-center text-center border rounded-lg shadow-lg p-6 bg-white">
                <FaBuilding className="text-secondary text-3xl mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Alamat Kantor
                </h3>
                <p className="text-gray-700 max-w-[80%] mx-auto">
                  {capitalizeFirstLetter(company_address.address_line)},
                  Kelurahan{" "}
                  {capitalizeFirstLetter(company_address.sub_district)},
                  Kecamatan {capitalizeFirstLetter(company_address.district)},{" "}
                  {capitalizeFirstLetter(company_address.city)},{" "}
                  {capitalizeFirstLetter(company_address.province)},{" "}
                  {company_address.zip_code}
                </p>
              </div>
            </div>{" "}
          </div>

          <div>
            <h1 className="text-center text-4xl font-semibold text-gray-700 mb-2">
              Hubungi Kami
            </h1>

            <p className="text-center text-base font-extralight text-gray-700 mb-4">
              Silahkan hubungi kami melalui email, telepon, atau chat WhatsApp
            </p>
            <div>
              <Image
                src={contact}
                alt="contact"
                width={400}
                height={400}
                className="max-w-[400px]"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalamanKontak;
