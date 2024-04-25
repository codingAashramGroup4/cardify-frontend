/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="relative bg-[#1E2230] flex flex-col gap-4 sm:flex-row justify-between p-8 lg:p-12 drop-shadow-lg rounded-lg max-w-6xl px-5 w-11/12">
        <img
          src="/image/Nav-Logo.png"
          alt="cta"
          className="absolute top-0 left-0 w-24 z-50"
        />
        <div className="text-center md:text-left text-xl md:text-2xl font-bold md:whitespace-nowrap">
          Subscribe to CARDIFY<br></br>
          <span className="text-sm leading-[28px] tracking-[0.01em]">
            Subscribe for receiving valuable newsletters.
          </span>
        </div>
        <div className="flex gap-2 items-center justify-center max-w-xs lg:max-w-md w-full">
          <input
            type="text"
            className="focus:ring-1 focus:ring-white rounded-lg lg:py-2 flex-1 appearance-none border border-[#272C3E] w-full py-1 px-4 bg-[#1E2230] text-gray-200 placeholder-gray-400 shadow-sm text-sm md:text-base lg:text-lg focus:outline-none "
            placeholder="Enter your email"
          />
          <button
            className="hover:border hover:border-white border border-transparent px-4 py-1 lg:py-2 text-sm md:text-base lg:text-lg font-semibold text-white rounded-lg shadow-md bg-gradient-to-r from-[#5FE716] via-[#209B72] to-teal-500"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="-mt-20 flex h-fit py-8 md:py-10 w-full justify-center items-center bg-[#272C3E] px-5 xl:px-20">
        <div className="max-w-[1121px] flex flex-col gap-8 md:flex-row w-full justify-between pt-20">
          <div className="flex max-w-[282px] flex-col gap-8">
            <Link href="/">
              <img src="/image/logo.png" width={50} height={50} alt="logo" />
            </Link>
            <div className="text-lg">
              We are a huge marketplace dedicated to connecting great artists of
              all <span className="font-semibold">CARDIFY</span> with their fans
              and unique token collectors!
            </div>
            <div className="-mt-1 hidden md:block text-sm">
              &copy; 2024 Cardify. All Rights Reserved.
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="font-semibold text-xl">Company</div>
            <div className="flex flex-col gap-4 text-lg">
              <a href="#_" className="hover:opacity-60">
                About
              </a>
              <a href="#_" className="hover:opacity-60">
                Careers
              </a>
              <a href="#_" className="hover:opacity-60">
                Press
              </a>
              <a href="#_" className="hover:opacity-60">
                Engineering Blog
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="font-semibold text-xl">Customer</div>
            <div className="flex flex-col gap-4 text-lg">
              <a href="#_" className="hover:opacity-60">
                Clinet Support
              </a>
              <a href="#_" className="hover:opacity-60">
                Latest news
              </a>
              <a href="#_" className="hover:opacity-60">
                Company Details
              </a>
              <a href="#_" className="hover:opacity-60">
                Who we are{" "}
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="#_" className=" ">
              <IoLogoFacebook className="hover:text-green-400" />
            </a>
            <a href="#_">
              <IoLogoTwitter className="hover:text-green-400" />
            </a>
            <a href="#_">
              <IoLogoInstagram className="hover:text-green-400" />
            </a>
          </div>
          <div className="-mt-1 md:hidden block">
            &copy; 2024 Cardify. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
