import { useState } from "react";

const NavBtn = () => {
  const [toggle, setToggle] = useState(Boolean);
  console.log(toggle);
  return (
    <>
      <button onClick={() => setToggle(!toggle)} className="lg:hidden">
        <label
          htmlFor="check"
          className="flex flex-col gap-1 p-3 rounded-lg cursor-pointer"
        >
          <input type="checkbox" id="check" className="peer/check hidden" />
          <span className="w-7 h-[3px] rounded-lg inline-block bg-sky-700 peer-checked/check:rotate-45 peer-checked/check:translate-y-2 duration-300"></span>
          <span className="w-7 h-[3px] rounded-lg inline-block bg-sky-700 peer-checked/check:scale-0 duration-300"></span>
          <span className="w-7 h-[3px] rounded-lg inline-block bg-sky-700 peer-checked/check:-rotate-45 peer-checked/check:-translate-y-2 duration-300"></span>
        </label>
      </button>
    </>
  );
};

export default NavBtn;
