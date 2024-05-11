/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "./Footer/Footer";
import Navbar from "./navbar/navbar";
import Accordion from "./Faq/Faq";
import Button from "../Button/Button";
import Customer from "./Customer/Customer";
const accData = [
  {
    title: "What makes 'CARDIFY' unique compared to other platforms ?",
    content:
      "Unlike traditional CARDIFY platforms, CARDIFY leverages the power of Web3 technology to provide a decentralized and boundless experience. The platform also offers an immersive metaverse environment, where users can engage with CARDIFYs in a dynamic and interactive way.",
  },
  {
    title: "How can I participate as an artist in CARDIFY ?",
    content:
      "Unlike traditional CARDIFY platforms, CARDIFY leverages the power of Web3 technology to provide a decentralized and boundless experience. The platform also offers an immersive metaverse environment, where users can engage with CARDIFYs in a dynamic and interactive way.",
  },
  {
    title: "How does it work ?",
    content:
      "Unlike traditional CARDIFY platforms, CARDIFY leverages the power of Web3 technology to provide a decentralized and boundless experience. The platform also offers an immersive metaverse environment, where users can engage with CARDIFYs in a dynamic and interactive way.",
  },
];
const Home = () => {
  return (
    <div className="">
      <div className="relative mx-auto pt-4 lg:pt-6 flex flex-col items-center justify-center text-[#D2DADF] bg-[url('/image/gradient.svg')] bg-cover">
        <div className="absolute top-0 opacity-10 w-full -z-20">
          <img src="/image/back.png" alt="back-img" className="mx-auto" />
        </div>

        <Navbar />

        <div className="flex w-full md:max-w-[1120px] flex-col gap-10 md:gap-20 px-5 xl:px-0 pt-8 md:pt-12 xl:pt-20">
          {/* Home SECTION */}
          <div className=" z-10 flex flex-col gap-5 md:gap-0 items-center justify-center md:flex-row md:justify-between">
            <div className="md:max-w-[598px] flex flex-col gap-5 tracking-[0.01em]">
              <div className="text-[36px] lg:text-[52px] font-bold leading-[49px] lg:leading-[71px]">
                Forge Connections, Craft Cards{" "}
                <span className="bg-gradient-to-r from-[#5EE616] to-[#209B72] inline-block text-transparent bg-clip-text">
                  CARDIFY
                </span>
              </div>
              <div className="lg:text-[22px] text-lg leading-[25px] md:leading-[30px] font-normal">
                <span className="font-bold">CARDIFY</span> invites you to step
                into a revolutionary digital realm where creativity knows no
                bounds. Prepare to embark on an extraordinary journey where the
                possibilities are as infinite as the imagination itself.
              </div>
              <div>
                <Button btnText={"Explore Now"} />
              </div>
            </div>
            <div className="max-w-[350px] md:max-w-[300px] w-full flex items-center md:justify-end">
              <img src="/image/Logo.png" alt="round" />
            </div>
          </div>

          {/* Top Clients */}
            <Customer/>

          {/* Top Clients */}
          {/* FAQ SECTION */}
          <Accordion data={accData} />
        </div>
        {/* FOOTER*/}
        <Footer />
      </div>
    </div>
  );
};
export default Home;
