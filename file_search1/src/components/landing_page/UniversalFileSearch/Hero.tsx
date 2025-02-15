import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col w-full text-white bg-neutral-800 max-md:max-w-full">
      <div className="flex relative flex-col w-full min-h-[640px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/94727323b3099e34e8e77c1af421d8b950e8567682d68e926a6d076a551b22c2?apiKey=08498be8539e426c9aa226bb55b18f78&"
          className="object-cover absolute inset-0 size-full"
          alt="Background image of file organization"
        />
        <div className="flex relative flex-col justify-center items-center px-20 py-52 w-full bg-zinc-900 bg-opacity-40 max-md:px-5 max-md:py-24 max-md:max-w-full">
          <div className="flex flex-col items-center mb-0 max-w-full w-[432px] max-md:mb-2.5">
            <h1 className="self-stretch text-6xl font-bold leading-none text-center rotate-[2.4492937051703357e-16rad] max-md:max-w-full max-md:text-4xl">
              Find Files Fast
            </h1>
            <p className="mt-6 text-2xl text-center rotate-[2.4492937051703357e-16rad]">
              Instantly locate any file with ease.
            </p>
            <Link
              to="/get-started"
              className="overflow-hidden px-5 py-3 mt-6 max-w-full text-lg leading-loose bg-indigo-500 rounded-md border border-solid border-black border-opacity-0 rotate-[2.4492937051703357e-16rad] w-[137px]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
