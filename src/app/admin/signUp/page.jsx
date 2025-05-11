"use client";
import axios from "axios";
import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    console.log(formData);

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await axios.post("/api/signUP", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      if (response.status === 200) {
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error submitting data to the API:", error);
    }
  };

  return (
    <div className="h-[100vh] w-full bg-gradient-to-r from-green-100 via-blue-500 to-purple-500 flex justify-center items-center">
      <div className="h-[35rem] w-[25rem] bg-white  justify-center items-center rounded-lg flex flex-col ">
        <h1 className="text-black text-3xl font-semibold">Register </h1>
        <p className="text-gray-600 text-base">
          Welcome! Please register to continue.
        </p>
        <form className="flex flex-col py-5  gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-black text-lg">
              Name
            </label>
            <input
              className="px-3 py-2 text-base border border-black rounded-md text-black"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type your Name"
              required
            />
          </div>

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
            <label htmlFor="name" className="text-black">
              Password
            </label>
            <input
              className="px-3 py-2 text-base border border-black rounded-md text-black"
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type your password"
              required
            />
          </div>

          <div className="flex justify-center ">
            <button
              className="bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 w-[50%] py-2 mt-6 rounded-lg cursor-pointer hover:bg-blue-800"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
