import React from "react";
import Feature from "./Feature";

const Features: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-20 py-24 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1176px] max-md:max-w-full">
        <h2 className="self-center text-5xl font-bold leading-none text-center rotate-[2.4492937051703357e-16rad] text-zinc-900 max-md:text-4xl">
          Key Features
        </h2>
        <p className="self-center mt-4 text-lg leading-7 text-center rotate-[2.4492937051703357e-16rad] text-zinc-400 w-[680px] max-md:max-w-full">
          Universal File Search revolutionizes the way you locate and manage
          your files with advanced, intuitive features designed to enhance
          productivity and efficiency.
        </p>
        <Feature
          title="Smart Search"
          description="Utilize AI-powered algorithms to quickly find files across multiple platforms and devices, ensuring you never lose track of important documents."
          imageSrc="https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/66756a4b3d5e7386d9a6754bf42069ce2399f8791ae411483213ae918765b743?apiKey=08498be8539e426c9aa226bb55b18f78&"
          imageAlt="Smart Search feature illustration"
        />
        <Feature
          title="Secure Cloud Integration"
          description="Effortlessly sync and access your files from popular cloud services, all within a secure and user-friendly interface, providing peace of mind with data protection."
          imageSrc="https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/f4808fc7769ed3950130e3360b1e13a33d81ebd48cca4c37a7b4a03c43a68de7?apiKey=08498be8539e426c9aa226bb55b18f78&"
          imageAlt="Secure Cloud Integration feature illustration"
          isReversed
        />
      </div>
    </div>
  );
};

export default Features;
