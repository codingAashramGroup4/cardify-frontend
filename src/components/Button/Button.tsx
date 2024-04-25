import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface ButtonTxt {
  btnText: string;
}

const Button: React.FC<ButtonTxt> = ({ btnText }) => {
  return (
    <Link href={"/login"}>
      <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6 bg-gradient-to-r from-[#5FE716] via-[#209B72] to-teal-500 group">
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <FaArrowRight className="w-5 h-5 text-white" />{" "}
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <FaArrowRight className="w-5 h-5 text-white" />{" "}
        </span>
        <span className="relative w-full text-white text-left transition-colors duration-200 ease-in-out group-hover:text-white">
          {btnText}
        </span>
      </div>
    </Link>
  );
};

export default Button;
