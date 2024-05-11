const Customer = () => {
  let popularLawyer = [
    {
      mainTitle: "JAMES MILNER",
      subTitle: "Criminal Lawyer",
      exp: "20",
      reviews: "123",
      img_lawyer: "https://www.tailwindtap.com/assets/advocate/lawyer_two.png",
    },
    {
      mainTitle: "JAMES MILNER",
      subTitle: "Criminal Lawyer",
      exp: "20",
      reviews: "123",
      img_lawyer: "https://www.tailwindtap.com/assets/advocate/lawyer_two.png",
    },
    {
      mainTitle: "JAMES MILNER",
      subTitle: "Criminal Lawyer",
      exp: "20",
      reviews: "123",
      img_lawyer: "https://www.tailwindtap.com/assets/advocate/lawyer_two.png",
    },
    // {
    //   mainTitle: "JAMES MILNER",
    //   subTitle: "Criminal Lawyer",
    //   exp: "20",
    //   reviews: "123",
    //   img_lawyer: "https://www.tailwindtap.com/assets/advocate/lawyer_two.png",
    // },
  ];
  return (
    <div className="flex">
      {popularLawyer.map((data, index) => {
        return (
          <div
            className="w-full !flex !justify-center hover:bg-gradient-to-r from-[#5EE616] to-[#209B72] duration-100 transition-all"
            key={index}
          >
            <div
              key={index}
              className="max-w-[365px] bg-[#050C24] rounded-b-[5px]"
            >
              <div className="overflow-hidden">
                <img
                  src={data.img_lawyer}
                  alt=""
                  className="w-full hover:opacity-75 cursor-pointer hover:scale-125 delay-200 duration-300 ease-in-out"
                />
              </div>
              <div className="h-[224px] flex flex-col">
                <div className="flex py-3.5 flex-col items-center">
                  <div className="text-lg leading-7 tracking-[0.04em] font-normal">
                    {data.mainTitle}
                  </div>
                  <div className="text-xs leading-[18px] tracking-[0.04em] text-[#707070] font-medium">
                    {data.subTitle}
                  </div>
                </div>
                <div className="h-[1px] w-full !bg-white"></div>
                <div className="flex flex-col gap-7 mx-auto max-w-[308px] xl:max-w-[308px] lg:max-w-[280px] w-full px-1">
                  <div className=" pt-3.5 w-full items-center flex justify-between">
                    <div className="w-[87px] text-start text-base font-normal leading-5">
                      <span className="font-semibold">{data.exp}+</span>
                      Yrs Experience
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <div>5.0</div>
                        <div className="flex items-center gap-[3px]">
                          {/* <img src={"/assets/advocate/star.svg"} alt="star" />
                          <img src={"/assets/advocate/star.svg"} alt="star" />
                          <img src={"/assets/advocate/star.svg"} alt="star" />
                          <img src={"/assets/advocate/star.svg"} alt="star" />
                          <img src={"/assets/advocate/star.svg"} alt="star" /> */}
                        </div>
                      </div>
                      <div className="text-start">{data.reviews} Reviews</div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="max-w-[128px] w-full py-2 bg-[#DDA45C] rounded-[4px] flex justify-center cursor-pointer">
                      <button className="text-white flex items-center justify-center gap-2.5">
                        <img src={"/assets/advocate/call.svg"} alt="call" />
                        Call Now
                      </button>
                    </div>
                    <div className="max-w-[128px] w-full py-2 rounded-[4px] border-[1px] border-[#DDA45C] flex justify-center cursor-pointer">
                      <button className="flex items-center justify-center gap-2.5">
                        <img src={"/assets/advocate/chat.svg"} alt="chat" />
                        Chat Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Customer;
