import React from "react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  logoSrc: string;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  logoSrc,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col justify-center items-center px-16 py-24 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="w-full max-w-[1144px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={imageSrc}
              alt={`Portrait of ${author}`}
              className="object-contain grow shrink-0 max-w-full rounded-2xl aspect-[0.9] w-[280px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src={logoSrc}
                alt="Company logo"
                className="object-contain max-w-full aspect-[5] w-[180px]"
              />
              <p className="mt-8 mr-10 text-xl leading-8 rotate-[2.4492937051703357e-16rad] text-zinc-900 max-md:mr-2.5 max-md:max-w-full">
                {quote}
              </p>
              <div className="flex flex-wrap gap-10 mt-20 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col flex-1">
                  <div className="text-xl font-bold rotate-[2.4492937051703357e-16rad] text-zinc-900">
                    {author}
                  </div>
                  <div className="self-start text-lg leading-loose rotate-[2.4492937051703357e-16rad] text-zinc-400">
                    {role}
                  </div>
                </div>
                <div className="flex flex-1 gap-1 items-center my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/1c6f5a80f47fb60bd9376d0d1a8c935d2d4cb2028be20d1edd144ace73ef0c25?apiKey=08498be8539e426c9aa226bb55b18f78&"
                    alt="Previous testimonial"
                    className="object-contain shrink-0 self-stretch w-9 rounded-2xl aspect-square"
                  />
                  <div className="flex shrink-0 self-stretch my-auto w-5 h-2.5 bg-indigo-500 rounded-md" />
                  <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 rounded-md bg-zinc-200" />
                  <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 rounded-md bg-zinc-200" />
                  <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 rounded-md bg-zinc-200" />
                  <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 rounded-md bg-zinc-200" />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/4ae76e567956def363928824773b3b8d64f35546cffaf8b00db2d0db5c88f86e?apiKey=08498be8539e426c9aa226bb55b18f78&"
                    alt="Next testimonial"
                    className="object-contain shrink-0 self-stretch w-9 rounded-2xl aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
