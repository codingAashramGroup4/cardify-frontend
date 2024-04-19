// 'useClient';
// import Link from "next/link";
// import { useState } from "react";

// const page = () => {
//   const [fullName, setFullName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
 
//   return (
//     <div className="w-full h-[100vh] flex items-center justify-center ">
//       <div className="bg-gray-100 p-5 rounded-lg shadow-2xl">
//         <h1 className="text-center text-2xl font-semibold mb-4">Register</h1>
//         <form className="flex flex-col p-4 gap-8 text-black">
//           <input
//             className="py-2 px-2  rounded-md w-[25rem]  shadow-md"
//             type="name"
//             placeholder="FullName"
//           />

//           <input
//             className="py-2 px-2  rounded-md  shadow-md"
//             type="username"
//             placeholder="Username"
//           />
//           <input
//             className="py-2 px-2  rounded-md  shadow-md"
//             type="email"
//             placeholder="Email"
//           />
//           <input
//             className="py-2 px-2  rounded-md  shadow-md"
//             type="password"
//             placeholder="Password"
//           />

//           <button className="py-1.5 w-[50%] m-auto font-semibold text-white rounded-full bg-[#03045e]  shadow-md">
//             Register
//           </button>
//         </form>
//         <div className="flex items-center justify-center gap-2">
//           <span className=" opacity-70">already have an account?</span>
//           <Link
//             href="/login"
//             className="opacity-70 hover:opacity-100 underline"
//           >
//             Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

'use client';
import Link from "next/link";
import { useState, FormEvent } from "react";
import axios from "axios";

const Page: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const userData = {
      fullName,
      username,
      email,
      password
    }

    console.log(userData);
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="bg-gray-100 p-5 rounded-lg shadow-2xl">
        <h1 className="text-center text-2xl font-semibold mb-4">Register</h1>
        <form
          className="flex flex-col p-4 gap-8 text-black"
          onSubmit={handleSubmit}
        >
          <input
            className="py-2 px-2 rounded-md w-[25rem] shadow-md"
            type="text"
            placeholder="FullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            className="py-2 px-2 rounded-md shadow-md"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="py-2 px-2 rounded-md shadow-md"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="py-2 px-2 rounded-md shadow-md"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="py-1.5 w-[50%] m-auto font-semibold text-white rounded-full bg-[#03045e] shadow-md"
          >
            Register
          </button>
        </form>
        <div className="flex items-center justify-center gap-2">
          <span className="opacity-70">already have an account?</span>
          <Link href="/login" className="opacity-70 hover:opacity-100 underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
