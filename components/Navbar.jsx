"use client";
import { React, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button, ButtonGroup } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export function Navbar() {
  const dropdownRef = useRef(null);
  let timeoutId;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsServiceSubMenuOpen(false);
      }
    }

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  });
  return (
    <div className={"flex flex-col bg-black sticky top-0 overflow-hidden z-50"}>
      <header className="px-4 z-100 lg:px-6 h-[80px] flex items-center pr-[2rem] justify-between bg-white/0 transition duration-300 ease-out hover:bg-blue-500/50 text-white">
        <nav className="z-100 flex items-center space-x-2 navbar_company ">
          <Link href="/" className="navbar_company flex items-center">
            <div className="hidden md:block">
              <img
                src="HeroLogo.png"
                alt="Artboard 2"
                className="h-12 w-[23rem]"
              />
            </div>
          </Link>
          <Link href="/" className="navbar_company flex items-center">
            <div className="md:hidden">
              <img src="Logo3.png" alt="Logo 2" className="h-14 w-14 mr-2" />
            </div>
          </Link>
        </nav>

        <nav className="text-sm text-bold ml-auto md:flex gap-4 sm:gap-6 justify-end items-center hidden text-black ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/ssp" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="./about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            className="font-medium hover:underline underline-offset-4 px-4 py-2 text-black hover:bg-[#00df9a] rounded-full"
            href="./contactpage"
          >
            <Button className="bg-[#00df9a] z-1000 p-3 container rounded-full">
              Contact
            </Button>
          </Link>
        </nav>
        <nav className="flex md:hidden z-1000">
          <Link
            className="font-medium hover:underline underline-offset-4 px-4 py-2 text-black hover:bg-[#00df9a] rounded-full"
            href="./contactpage"
          >
            <Button className="bg-[#00df9a] z-1000 p-3 container rounded-full">
              Contact
            </Button>
          </Link>
          <Dropdown>
            <DropdownTrigger>
              <Button
                className="text-[#00df9a] contained font-medium hover:underline px-4 py-2 rounded-full border-solid border-2 border-[#00df9a] "
                variant="bordered"
              >
                MORE
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              style={{ zIndex: 200, borderColor: "#ffffff" }}
              className="bg-black text-white absolute top-0 right-full mt-0 ml-2 w-40 shadow-lg text-center rounded-lg px-2 py-2 z-1000 hover-bg-[#00df9a] hover:text-black hover:border-[#00df9a"
            >
              <DropdownItem key="new" className="py-2">
                <Link href="/">Home</Link>
              </DropdownItem>
              <DropdownItem key="copy" className="py-2">
                <Link href="/ssp">Servies</Link>
              </DropdownItem>
              <DropdownItem key="edit" className="py-2">
                <Link href="/about">About Us</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </nav>
      </header>
    </div>
  );
}
