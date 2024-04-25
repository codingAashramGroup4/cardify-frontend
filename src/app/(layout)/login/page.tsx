"use client";
import Link from "next/link";
import { useState, FormEvent } from "react";

const Page: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    console.log(userData);
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center ">
      <div className="bg-gray-100 p-5 rounded-lg shadow-2xl">
        <h1 className="text-center text-2xl font-semibold mb-4">Login</h1>
        <form
          className="flex flex-col p-4 gap-8 text-black"
          onSubmit={handleSubmit}
        >
          <input
            className="py-2 px-2  rounded-md w-[25rem]  shadow-md"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex flex-col gap-2">
            <input
              className="py-2 px-2  rounded-md  shadow-md"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="text-end underline opacity-70 hover:opacity-100">
              <Link href="/forgot-password">Forgot Password</Link>
            </span>
          </div>
          <button className="py-1.5 w-[50%] m-auto font-semibold text-white rounded-full bg-[#03045e]  shadow-md">
            Login
          </button>
        </form>
        <div className="flex items-center justify-center gap-2">
          <span className=" opacity-70">Don't have an account?</span>
          <Link
            href="/signUp"
            className="opacity-70 hover:opacity-100 underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
