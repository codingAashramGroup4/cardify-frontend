"use client";
import { useEffect, useState } from "react";
// import { Sidebar } from "./SideBar";
import Image from "next/image";
import NavBtn from "@/components/Button/NavBtn";
import Link from "next/link";
import Button from "@/components/Button/Button";

const Navbar = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      console.log(top);
      if (prevScrollpos > currentScrollPos) {
        setTop(0);
      } else {
        setTop(-100);
      }
      setPrevScrollpos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos, top]);

  const NavLinks = [
    {
      title: "Home",
      link: "",
    },
    {
      title: "About Us",
      link: "aboutUs",
    },
    {
      title: "Blog",
      link: "blog",
    },
  ];
  return (
    <>
      <nav
        className="bg-heroBg w-full md:max-w-[1120px] -z-0 px-2 lg:px-0"
        style={{
          position: "sticky",
          top: `${top}px`,
          zIndex: 100,

          transition: "all 0.4s ease-out",
        }}
      >
        <div className="grid grid-flow-col items-center justify-between mx-auto max-w-[1440px]">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse lg:pl-2 bg-[#050C24] rounded-md px-3"
          >
            <Image
              src="/image/Nav-Logo.png"
              width={500}
              height={500}
              className="size-12"
              alt="Nav Logo"
            />
            <h2 className="text-3xl font-semibold">CARDIFY</h2>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="hidden lg:flex justify-end w-52">
              <Button btnText={"Login"} />
            </div>
            <NavBtn />
          </div>
          <div className="items-center justify-between hidden w-full lg:flex md:w-auto ">
            <ul className="flex flex-col p-4 md:p-0 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row">
              {NavLinks.map((item) => (
                <li key={item.title} className="bg-[#050C24] rounded-md px-2 py-1">
                  <Link
                    href={item?.link}
                    className="group py-2 px-3 rounded md:bg-transparent md:p-0 text-base font-semibold flex  cursor-pointer flex-col"
                    aria-current="page"
                  >
                    {item?.title}
                    <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-gradient-to-r from-[#5FE716] via-[#209B72] to-teal-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
