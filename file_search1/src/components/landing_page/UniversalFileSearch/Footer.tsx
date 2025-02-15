import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const footerLinks = [
    { text: "Pricing", href: "/pricing" },
    { text: "About us", href: "/about" },
    { text: "Features", href: "/features" },
    { text: "Help Center", href: "/help" },
    { text: "Contact us", href: "/contact" },
    { text: "FAQs", href: "/faqs" },
    { text: "Careers", href: "/careers" },
  ];

  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/dda2743493ab3a34c6697f321967574a6a8a49a5e640d5fbbf0e0b881dcd5ee8?apiKey=08498be8539e426c9aa226bb55b18f78&",
      alt: "Facebook",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/f103dddd969cff2e6a16ea5e7d99225acd5e01228ee6723d1c2ff27f26e3012e?apiKey=08498be8539e426c9aa226bb55b18f78&",
      alt: "Twitter",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/7ae2b26cce1b1e7ecc517b8dfb9415779ca11d35ef2818d63eac09639e94c298?apiKey=08498be8539e426c9aa226bb55b18f78&",
      alt: "Instagram",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/028d2e8c91a9148ad7a50620021bf0bd482de5e7a298ceb9c885de7cefce3b42?apiKey=08498be8539e426c9aa226bb55b18f78&",
      alt: "LinkedIn",
    },
  ];

  return (
    <footer className="flex overflow-hidden flex-col items-center px-20 pt-24 pb-6 w-full bg-neutral-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1176px] max-md:max-w-full">
        <div className="self-center text-xl font-semibold text-center text-white rotate-[2.4492937051703357e-16rad]">
          Subscribe to our newsletter
        </div>
        <form className="flex items-start self-center mt-2 max-w-full text-base leading-loose w-[376px]">
          <label htmlFor="emailInput" className="sr-only">
            Enter your email
          </label>
          <div className="flex flex-auto gap-2 px-4 py-2.5 rounded-3xl border border-solid bg-black bg-opacity-0 border-neutral-300 text-zinc-200">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/c88fcf21bc66d33e025b247b87544cb5b2b4ba8e8cc1d09195d40d888f62a96d?apiKey=08498be8539e426c9aa226bb55b18f78&"
              className="object-contain shrink-0 my-auto w-5 aspect-square"
              alt=""
            />
            <input
              type="email"
              id="emailInput"
              placeholder="Enter your email"
              aria-label="Enter your email"
              className="bg-transparent border-none outline-none text-zinc-200 placeholder-zinc-200"
            />
          </div>
          <button
            type="submit"
            className="overflow-hidden px-5 py-2.5 text-white whitespace-nowrap bg-indigo-500 rounded-none border border-solid border-black border-opacity-0 rotate-[2.4492937051703357e-16rad]"
          >
            Subscribe
          </button>
        </form>
        <div className="flex flex-wrap gap-10 mt-20 text-white max-md:mt-10">
          <div className="flex flex-auto gap-2 text-3xl font-bold">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/8f24453cb8f794554b96cc36cc9e9dc63bbecaee4251cb443e75babf87fa5a38?apiKey=08498be8539e426c9aa226bb55b18f78&"
              className="object-contain shrink-0 w-12 rounded-md aspect-square"
              alt="Universal File Search Logo"
            />
            <div className="flex-auto rotate-[2.4492937051703357e-16rad]">
              Universal File Search
            </div>
          </div>
          <nav className="flex flex-wrap flex-auto gap-10 my-auto text-lg leading-loose max-md:max-w-full">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="rotate-[2.4492937051703357e-16rad]"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
        <hr className="mt-6 border-t border-neutral-700" />
        <div className="flex flex-wrap gap-5 justify-between items-center mt-6 w-full max-md:max-w-full">
          <div className="flex gap-10 self-stretch px-3 py-2 text-sm leading-loose whitespace-nowrap rounded-md border border-solid bg-black bg-opacity-0 border-neutral-300 text-zinc-200">
            <span>English</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/79081def4fa0a46b376586947e2eb39f5085341e34c8c1ba6d423ebcbad2858b?apiKey=08498be8539e426c9aa226bb55b18f78&"
              className="object-contain shrink-0 my-auto w-4 aspect-square"
              alt="Language dropdown"
            />
          </div>
          <div className="self-stretch my-auto text-sm leading-loose text-center text-white rotate-[2.4492937051703357e-16rad]">
            © 2024 Brand, Inc. • Privacy • Terms • Sitemap
          </div>
          <div className="flex gap-6 self-stretch my-auto">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                loading="lazy"
                src={icon.src}
                className="object-contain shrink-0 w-6 aspect-square"
                alt={icon.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
