import React from "react";

const NewsLetter = () => {
  return (
    <div >
      <div className="text-center">
        <h1 className="text-3xl sm:text-5xl font-medium text-black">
          Latest Blog
        </h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base text-black">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos?
        </p>
        <form
          className="flex justify-between max-w-[700px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
          action=""
        >
          <input
            type="email"
            placeholder="enter your email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className="border-1 border-black px-4 py-4 sm:px-8 active:bg-gray-500 active:text-white text-black"
          >
            subcribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
