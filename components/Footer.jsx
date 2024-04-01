import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const SocialIcon = ({ icon: Icon }) => (
  <Icon className="social-icon hover:text-[#00df9a]" size={30} />
);
// Footer component
// Array defining the content and structure of the footer
const items = [
  // Social media icons
  { type: "icon", icon: FaFacebookSquare },
  { type: "icon", icon: FaInstagram },
  { type: "icon", icon: FaTwitterSquare },
  { type: "icon", icon: FaGithubSquare },
  { type: "icon", icon: FaDribbbleSquare },
  // Footer sections

  {
    type: "section",
    title: "Support",
    items: ["About Us", "Services", "Contact Us"],
  },
  {
    type: "section",
    title: "Digital First",
    items: [
      "Banking",
      "Manufacturing",
      "Retail Industry",
      "Cybersecurity",
      "Cloud Services",
      "Automated Ops",
      "Digital Workspace",
      "Consulting Services",
      "Networking & Telecom",
      "Service & IT Service Managements",
      "Customer Realtionship Management",
      "SAP - System Application & Products",
    ],
  },
];

export function Footer() {
  return (
    <div className="bg-[#000300] mx-auto py-12 px-4 flex flex-col justify-center items-center md:grid lg:grid-cols-3 gap-4 text-gray-300 text-wrap overflow-hidden ">
      {/* Left section with brand and social icons */}

      <div className="lg:col-span-1 flex justify-start gap-10 mt-1 ml-8">
        {/* Mapping over sections and rendering content */}
        {items.map((item, index) =>
          item.type === "section" ? (
            <div key={index}>
              <h6 className="font-medium text-gray-100 text-xl">
                {item.title}
              </h6>
              <ul>
                {/* Mapping over items in each section */}
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className="py-2 text-sm">
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>
      {/* Right section with footer content organized in sections */}
      <div>
        <h1 className="w-full text-3xl lg:text-4xl xl:text-5xl font-bold text-[#00df9a]">
          PRIME GROUP.
        </h1>
        {/*
        <div className="flex justify-between md:w-[75%] my-6">
           Mapping over social icons and rendering the SocialIcon component 
          {items.map((item, index) =>
            item.type === "icon" ? (
              <SocialIcon key={index} icon={item.icon} />
            ) : null
          )}
        </div>
        */}
        <div className="self-stretch relative tracking-[-0.01em] leading-[10px]">
          © Prime Groups, Inc. 2024. We love our users!
        </div>
      </div>
      <div>
        <Image
          src="/FooterRRR.png"
          width={1000}
          height={1000}
          className="justify-end w-[100vh] h-auto"
        />
      </div>
    </div>
  );
}
