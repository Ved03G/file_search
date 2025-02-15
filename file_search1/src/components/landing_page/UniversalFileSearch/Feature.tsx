import React from "react";
import { Link } from "react-router-dom";

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed = false,
}) => {
  const contentOrder = isReversed ? "order-last" : "";
  const imageOrder = isReversed ? "order-first" : "";

  return (
    <div className="mt-16 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div
          className={`flex flex-col w-6/12 max-md:ml-0 max-md:w-full ${contentOrder}`}
        >
          <div className="flex flex-col items-start self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
            <h2 className="text-4xl font-bold leading-snug rotate-[2.4492937051703357e-16rad] text-zinc-900">
              {title}
            </h2>
            <p className="self-stretch mt-4 text-lg leading-7 rotate-[2.4492937051703357e-16rad] text-zinc-400 max-md:max-w-full">
              {description}
            </p>
            <div className="flex gap-4 mt-4 text-base leading-loose">
              <Link
                to="/try-now"
                className="overflow-hidden px-7 py-2.5 text-white bg-indigo-500 rounded-2xl border border-solid border-black border-opacity-0 rotate-[2.4492937051703357e-16rad] max-md:px-5"
              >
                Try now
              </Link>
              <Link
                to="/learn-more"
                className="overflow-hidden px-4 py-2.5 text-indigo-500 rounded-md border border-solid bg-black bg-opacity-0 border-black border-opacity-0 rotate-[2.4492937051703357e-16rad]"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full ${imageOrder}`}
        >
          <img
            loading="lazy"
            src={imageSrc}
            alt={imageAlt}
            className="object-contain grow w-full rounded-2xl aspect-[1.35] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
