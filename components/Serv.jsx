"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { BsBank } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";
import { FaShop } from "react-icons/fa6";
import { IoCloud } from "react-icons/io5";
import { MdOutlineFactory } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa";
import { PiPlantDuotone } from "react-icons/pi";
import { GiGroupedDrops } from "react-icons/gi";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { MdManageAccounts } from "react-icons/md";
import { FaArrowsDownToPeople } from "react-icons/fa6";

export function Serv() {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const windowHeight = window.innerHeight;
      const sectionHeight = section.getBoundingClientRect().height;
      const scrollPosition =
        section.offsetTop - (windowHeight - sectionHeight) / 2;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  }
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-slate-50 to-indigo-200 ">
        <div className="container space-y-10 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Tailored solutions for your business
            </h1>
            <p className="max-w-3xl mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We offer a wide range of services to meet your business needs.
              From consulting to implementation, we've got you covered.
            </p>
          </div>
          {/* items start
        ffffffffffffffffffffffffff
        ffffffffffffffffffffff
        fffffffffffffffffff
        */}
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center rounded-full border border-gray-200 ">
                <BsBank className="h-11 w-11" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Banking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tailored financial solutions for modern banking needs.
                </p>
              </div>
              <Button
                onClick={() => scrollToSection("banking")}
                className="mx-auto w-full max-w-[150px]"
                size="sm"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
                <MdOutlineSecurity className="h-11 w-11" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Cyber Security</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Protecting your digital assets with cutting-edge defense
                  strategies.
                </p>
              </div>
              <Button
                onClick={() => scrollToSection("cyber")}
                className="mx-auto w-full max-w-[150px]"
                size="sm"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border  border-gray-200">
                <LuNetwork className="h-11 w-11" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Networking & Telecom</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Building reliable connections for seamless communication.
                </p>
              </div>
              <Button
                onClick={() => scrollToSection("networking")}
                className="mx-auto w-full max-w-[150px]"
                size="sm"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
                <FaShop className="h-11 w-11" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Retail Industry</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Elevating retail experiences through innovative solutions.
                </p>
              </div>
              <Button
                onClick={() => scrollToSection("retail")}
                className="mx-auto w-full max-w-[150px]"
                size="sm"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
                <IoCloud className="h-11 w-11" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Cloud Services</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Empowering businesses with scalable and flexible cloud
                  solutions.
                </p>
              </div>
              <Button
                onClick={() => scrollToSection("cloud")}
                className="mx-auto w-full max-w-[150px]"
                size="sm"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
                <MdOutlineFactory className="h-11 w-11" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Manufacturing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Streamlining operations and optimizing production processes
                </p>
              </div>
              <Button
                onClick={() => scrollToSection("manufacturing")}
                className="mx-auto w-full max-w-[150px]"
                size="sm"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
                <FaPeopleArrows className="h-11 w-11" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Customer relations</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enhancing customer engagement through personalized
                  interactions.
                </p>
              </div>
              <Button
                onClick={() => scrollToSection("customer")}
                className="mx-auto w-full max-w-[150px]"
                size="sm"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
                <PiPlantDuotone className="h-11 w-11" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">SAP</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Integrated software solutions for efficient business
                  management.
                </p>
              </div>
              <Button
                onClick={() => scrollToSection("sap")}
                className="mx-auto w-full max-w-[150px]"
                size="sm"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
                <GiGroupedDrops className="h-11 w-11" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Automated OPS</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Optimizing workflows through automated operational processes.
                </p>
              </div>
              <Button
                onClick={() => scrollToSection("automated")}
                className="mx-auto w-full max-w-[150px]"
                size="sm"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
                <LiaDigitalTachographSolid className="h-11 w-11" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Digital Workspace</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Transforming work environments for enhanced productivity and
                  collaboration.
                </p>
              </div>
              <Button
                onClick={() => scrollToSection("digital")}
                className="mx-auto w-full max-w-[150px]"
                size="sm"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
                <MdManageAccounts className="h-11 w-11" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Service Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ensuring IT services align with business objectives for
                  optimal performance.
                </p>
              </div>
              <Button
                onClick={() => scrollToSection("service")}
                className="mx-auto w-full max-w-[150px]"
                size="sm"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 ">
                <FaArrowsDownToPeople className="h-11 w-11" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Consulting</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Strategic guidance and expertise to drive business success.
                </p>
              </div>
              <Button
                onClick={() => scrollToSection("consulting")}
                className="mx-auto w-full max-w-[150px]"
                size="sm"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
          </div>
          {/* add above this */}
        </div>
      </section>
      <div className="bg-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50/90 py-6 lg:py-6">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Our Services
                </h1>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We provide a wide range of IT services to help your business
                  succeed.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-5">
            <section id="banking" className="py-6 lg:py-10 flex flex-col">
              <div className="container items-center gap-4 px-4 md:px-6 lg:gap-10 bg-gray-500/30 rounded-lg p-10 flex flex-col h-full">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Banking
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Prime Group Technologies provides tailored solutions for the
                    banking sector, including core banking systems, digital
                    banking platforms, risk management tools, compliance
                    solutions, and consulting services, enabling banks to
                    enhance operational efficiency, improve customer experience,
                    and ensure regulatory compliance.
                  </p>
                </div>
              </div>
            </section>
            <section id="cyber" className="py-6 lg:py-10 flex flex-col">
              <div className="container items-center gap-4 px-4 lg:gap-10 bg-stone-300 rounded-lg p-10 flex flex-col h-full">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    CyberSecurity
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    With advanced cybersecurity solutions, Prime Group
                    Technologies helps organizations safeguard against cyber
                    threats, offering services such as threat detection,
                    incident response, vulnerability assessments, security
                    audits, and employee training to protect sensitive data and
                    maintain business continuity.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-5">
            <section id="networking" className="py-6 lg:py-10 flex flex-col">
              <div className="container items-center gap-4 px-4 md:px-6 lg:gap-10 bg-stone-300 rounded-lg p-10 flex flex-col h-full">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Networking and Telecom
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Prime Group Technologies offers networking and
                    telecommunications solutions, including network design,
                    implementation, optimization, and management services, as
                    well as telecom infrastructure setup, maintenance, and
                    support, ensuring reliable connectivity and seamless
                    communication for businesses.
                  </p>
                </div>
              </div>
            </section>
            <section id="retail" className="py-6 lg:py-10 flex flex-col">
              <div className="container items-center gap-4 px-4 lg:gap-10 bg-gray-500/30 rounded-lg p-10 flex flex-col h-full">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Retail Industry
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Catering to the retail sector, Prime Group Technologies
                    delivers solutions such as point-of-sale systems, inventory
                    management software, customer analytics tools, e-commerce
                    platforms, and omnichannel integration services, enabling
                    retailers to optimize operations, enhance customer
                    engagement, and drive sales growth.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center md:space-x-5">
            <section id="manufacturing" className="py-6 lg:py-10 flex flex-col">
              <div className="container items-center gap-4 px-4 md:px-6 lg:gap-10 bg-gray-500/30 rounded-lg p-10 flex flex-col h-full">
                <div className="space-y-2 ">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Manufacturing
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Prime Group Technologies provides manufacturing solutions
                    encompassing production planning, inventory management,
                    supply chain optimization, quality control, and asset
                    management systems, empowering manufacturers to increase
                    efficiency, reduce costs, and maintain high product quality.
                  </p>
                </div>
              </div>
            </section>
            <section id="cloud" className="py-6 lg:py-10 flex flex-col">
              <div className="container items-center gap-4 px-4 lg:gap-10 bg-stone-300 rounded-lg p-10 flex flex-col h-full">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Cloud Services
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Offering cloud solutions tailored to specific business
                    needs, Prime Group facilitates cloud migration,
                    infrastructure setup, data storage, backup, and disaster
                    recovery services, enabling organizations to leverage the
                    scalability, flexibility, and cost-effectiveness of cloud
                    computing.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center md:space-x-5">
            <section id="customer" className="py-6 lg:py-10 flex flex-col">
              <div className="container items-center gap-4 px-4 md:px-6 lg:gap-10 bg-stone-300 rounded-lg p-10 flex flex-col h-full">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Customer Relationship Management
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Prime Group Technologies delivers CRM solutions that enable
                    businesses to manage customer interactions, track sales
                    leads, automate marketing campaigns, and analyze customer
                    data, fostering stronger relationships, improving customer
                    satisfaction, and driving sales growth.
                  </p>
                </div>
              </div>
            </section>
            <section id="sap" className="py-6 lg:py-10 flex flex-col">
              <div className="container items-center gap-4 px-4 lg:gap-10 rounded-lg bg-gray-500/30 p-10 flex flex-col h-full">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    SAP
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Prime Group Technologies specializes in SAP implementation,
                    customization, integration, and support services, helping
                    businesses leverage SAP's suite of enterprise resource
                    planning (ERP) solutions to streamline operations, optimize
                    processes, and achieve business objectives.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-5">
            <section id="automated" className="py-6 lg:py-10 flex flex-col">
              <div className="container items-center gap-4 px-4 md:px-6 lg:gap-10 bg-gray-500/30 rounded-lg p-10 flex flex-col h-full">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Automated Ops
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Prime Group Technologies offers automated operations
                    solutions, including robotic process automation (RPA),
                    AI-driven automation, and workflow orchestration tools, to
                    streamline repetitive tasks, improve efficiency, and reduce
                    operational costs for businesses.
                  </p>
                </div>
              </div>
            </section>
            <section id="digital" className="py-6 lg:py-10 flex flex-col">
              <div className="container items-center gap-4 px-4 lg:gap-10 bg-stone-300 rounded-lg p-10 flex flex-col h-full">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Digital Workspace
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Providing digital workspace solutions, Prime Group
                    Technologies enables organizations to create collaborative,
                    flexible, and secure work environments, integrating tools
                    for remote work, document collaboration, virtual meetings,
                    and employee productivity enhancement.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-5">
            <section id="service" className="py-6 lg:py-10 flex flex-col">
              <div className="container items-center gap-4 px-4 md:px-6 lg:gap-10 bg-stone-300 rounded-lg p-10 flex flex-col h-full">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Service Management
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Prime Group Technologies delivers IT service management
                    solutions to optimize IT processes, automate service
                    delivery, track IT assets, and ensure compliance with ITIL
                    best practices, enhancing the efficiency and reliability of
                    IT operations.
                  </p>
                </div>
              </div>
            </section>
            <section id="consulting" className="py-6 lg:py-10 flex flex-col">
              <div className="container items-center gap-4 px-4 lg:gap-10 bg-gray-500/30 rounded-lg p-10 flex flex-col h-full">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Consulting Services
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    With a team of experienced consultants, Prime Group
                    Technologies offers strategic consulting services to help
                    businesses identify opportunities, overcome challenges, and
                    achieve their goals through technology adoption, process
                    optimization, and organizational transformation.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
