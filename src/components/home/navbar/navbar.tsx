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
      link: "home",
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
        className={`bg-heroBg py-4 px-6 3xl:px-16 -z-0`}
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
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/image/Logo.png"
              width={500}
              height={500}
              className="size-12"
              alt="Nav Logo"
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="hidden lg:flex justify-end w-52">
              <Button />
            </div>
            <NavBtn />
          </div>
          <div className="items-center justify-between hidden w-full lg:flex md:w-auto ">
            <ul className="flex flex-col p-4 md:p-0 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row">
              {NavLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item?.link}
                    className="block py-2 px-3 rounded md:bg-transparent md:p-0 text-base font-semibold"
                    aria-current="page"
                  >
                    {item?.title}
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
