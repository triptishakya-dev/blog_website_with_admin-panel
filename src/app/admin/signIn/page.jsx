"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    console.log(formData);

    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await axios.post("/api/signIn", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      if (response.status === 200) {
        console.log("Sign in successful:", response);
        router.push("/admin/addBlog");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-[100vh] w-full bg-gradient-to-r from-green-100 via-blue-500 to-purple-500 flex justify-center items-center">
      <div className="h-[35rem] w-[25rem] bg-white  justify-center items-center rounded-lg flex flex-col ">
        <h1 className="text-black text-3xl font-semibold">signIn </h1>

        <form className="flex flex-col py-5  gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-black" htmlFor="name">
              Email
            </label>
            <input
              className="px-3 py-2 text-base border border-black rounded-md text-black"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type your Email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-black text-lg">
              password
            </label>
            <input
              className="px-3 py-2 text-base border border-black rounded-md text-black"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type your password"
              required
            />
          </div>
          <button
            className="bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 w-[50%] py-2 mt-6 rounded-lg cursor-pointer hover:bg-blue-800"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
