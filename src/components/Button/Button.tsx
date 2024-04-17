import Link from "next/link";

const Button = () => {
  return (
    <Link href={"/login"}>
      <button className="w-36 h-16 border-2 border-sky-300 text-sky-800 font-black rounded-full hover:text-white duration-300 relative group">
        <span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
        login
      </button>
    </Link>
  );
}

export default Button