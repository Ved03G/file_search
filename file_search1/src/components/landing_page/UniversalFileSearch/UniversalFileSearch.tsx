import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

const UniversalFileSearch: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white shadow-[0px_3px_6px_rgba(18,15,40,0.12)]">
      <Header />
      <Hero />
      <Features />
      <Testimonial
        quote="Universal File Search has revolutionized the way I manage documents. It's fast, reliable, and incredibly user-friendly."
        author="Emily Thompson"
        role="Digital Archivist"
        logoSrc="https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/537163fd6457b60011694d796676eb6526ae403657d30a13687b9eda5accc224?apiKey=08498be8539e426c9aa226bb55b18f78&"
        imageSrc="https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/4d06f4efb6d624d8e6c20a606276b078e9c41dbe17447bdf5af5f6a5dcfa4d73?apiKey=08498be8539e426c9aa226bb55b18f78&"
      />
      <Footer />
    </div>
  );
};

export default UniversalFileSearch;
