"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useState } from "react";

export function About() {
  const [isclikk, setIsclikk] = useState(false);
  return (
    <div className="flex flex-col">
      <main className="flex flex-col justify-center items-center">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative z-[-1] top-0 object-cover bg-no-repeat"
          style={{
            backgroundImage: 'url("/About.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h1 className="text-5xl font-bold tracking-tighter text-white text-center sm:text-5xl md:text-5xl/none">
              About Us
            </h1>
            <p className="justify-center text-white text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We help businesses transform through technology. Through our
              Digital It Solutions.
            </p>
          </div>
        </section>

        <section className="pt-[8vh] mx-auto w-full py-12 md:py-24 sm:px-8 lg:px-16 bg-gradient-to-t from-gray-700 via-gray-900 to-black ">
          <div className="flex items-center text-center">
            <div>
              <div className="w-full flex flex-col items-center justify-center text-white">
                <h2 className="text-5xl font-bold tracking-tighter text-white text-center sm:text-5xl md:text-5xl/none">
                  Who We Are?
                </h2>
                <p className="justify-center text-white text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A Global Information Technology Company offering services and
                  solutions in the Middle East Region. We are a leader in the
                  global consulting company delivering business, technology and
                  outsourcing services with a commitment to providing
                  innovation, value, and complete customer satisfaction. Today,
                  technology has become an integral part of our daily lives.
                  Organizations and businesses, both private and government,
                  avail Information Technology, and we aid them to function more
                  efficiently, productively and profitably. Alwosta integrates
                  technology, people, and business processes, together, to
                  create excellent automated and sophisticated systems. ERP
                  (Enterprise Resource Planning) systems and e-governance have
                  successfully been implemented and have resulted in
                  cost-cutting, improved performance, while also giving our
                  clients the business intelligence they need to gain
                  competitive advantage.
                </p>
              </div>
            </div>
          </div>
          <section className="pt-[8vh]">
            <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6 ">
              <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 className="text-5xl font-bold tracking-tighter text-white text-center sm:text-5xl md:text-5xl/none ">
                  Our Team
                </h2>
                <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                  Explore the whole collection of open-source web components and
                  elements built with the utility classes from Tailwind
                </p>
              </div>
              <div className="flex flex-col md:grid gap-8 mb-6 lg:mb-16 md:grid-cols-1">
                <div className="flex flex-row items-center justify-between bg-stone-300  rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 ">
                  <div className="text-center w-auto">
                    <Image
                      className="flex md:hidden sm:block rounded-lg sm:rounded-none sm:rounded-l-lg justify-center w-[25rem]"
                      src="/Chetanlatest.webp"
                      alt="Chethan Jagadeesh"
                      width="200"
                      height="200"
                    />
                    <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Chethan Jagadeesh</a>
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400">
                      General Manager & CEO
                    </span>
                    <p className="text-2xl flex text-justify mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 px-6">
                      Chethan Jagadeesh is an individual contributor with over
                      10 years of experience in Sales, Account Management, and
                      Business Development across various markets, products, and
                      services. His passion for his work and continuous
                      self-improvement has led to significant achievements,
                      including a substantial increase in revenue through new
                      client relationships in the Middle East. With high energy,
                      great communication skills, and the ability to work
                      independently or in a team, Chethan excels in roles
                      requiring sales management, key account management, and
                      strategic alliance management. His approach to corporate
                      work involves full engagement and authority, aiming to
                      maximize work potential and foster a smart working
                      culture. Chethan's specialties include customer
                      acquisition and end-to-end sales, making him a reliable
                      and friendly professional in the corporate environment.
                    </p>
                  </div>
                  <Image
                    className="rounded-lg hidden md:block sm:rounded-l-lg w-[18rem] justify-end"
                    src="/Chetanlatest.webp"
                    alt="Chethan Jagadeesh"
                    width="200"
                    height="200"
                  />
                </div>
                <div className=" flex flex-col md:flex-row items-center justify-between bg-stone-300 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                  <Image
                    className="rounded-lg sm:rounded-none sm:rounded-l-lg justify-start w-[25rem]"
                    src="/Dineshlatest.webp"
                    alt="Dinesh Basavarajappa"
                    width="200"
                    height="200"
                  />

                  <div className="justify-center w-auto px-6">
                    <h3 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Dinesh Basavarajappa</a>
                    </h3>
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      Board of Director
                    </p>
                    <p className="text-justify text-2xl flex text-wrap mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                      Dinesh M Basavarajappa is a Fisheries Graduate from UAS
                      Bangalore, endorsed as a Fish Technologist by the
                      Government of India, boasting 25 years of extensive
                      expertise. His professional journey encompasses diverse
                      roles in Production Planning & Control, Quality Assurance,
                      Process Enhancements, Sales and Marketing, Logistics
                      Operations, and Man Management across the realms of Food
                      Processing, Animal Feed Production, and Poultry Hatchery
                      Operations. With nearly a decade spent in East African
                      countries within the Seafood & Meat Industry's and another
                      15 years dedicated to the Poultry Industry in the Middle
                      East, he has operated at various levels, ranging from
                      Shift Manager to Head of Operations and VP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
