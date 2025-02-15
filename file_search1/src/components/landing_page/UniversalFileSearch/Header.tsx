import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive }) => (
  <Link
    to={href}
    className={`overflow-hidden p-4 rounded-md bg-black bg-opacity-0 ${
      isActive ? "font-bold text-indigo-500" : "text-gray-600"
    }`}
  >
    {children}
    {isActive && (
      <div className="flex shrink-0 mt-3 h-1 bg-indigo-500 rounded-sm" />
    )}
  </Link>
);

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between px-6 py-0.5 w-full bg-white shadow-[0px_0px_2px_rgba(23,26,31,0.12)] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 max-md:max-w-full">
        <div className="flex flex-auto gap-2.5 my-auto text-3xl text-black">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/0e11337b017f8027d78d4e13fd84effa892dbfef96423193a9babd5e82e4ba1f?apiKey=08498be8539e426c9aa226bb55b18f78&"
            className="object-contain shrink-0 my-auto w-9 aspect-square"
            alt="Universal File Search Logo"
          />
          <div className="flex-auto rotate-[2.4492937051703357e-16rad]">
            Universal File Search
          </div>
        </div>
        <nav className="flex flex-auto text-sm leading-loose text-gray-600 bg-black bg-opacity-0">
          <NavLink href="/file-search">File Search</NavLink>
          <NavLink href="/access-storage">Access Storage</NavLink>
          <NavLink href="/help" isActive>
            Help
          </NavLink>
        </nav>
      </div>
      <div className="flex gap-4 my-auto text-sm leading-loose">
        <Link
          to="/signup"
          className="flex overflow-hidden gap-1.5 px-8 py-2 text-indigo-500 bg-white rounded-xl border border-indigo-500 border-solid rotate-[2.4492937051703357e-16rad] max-md:px-5"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/c499bc89f8ec7ede61bc10b07b074ed20bac85b64856b807d8d012d0e82a5328?apiKey=08498be8539e426c9aa226bb55b18f78&"
            className="object-contain shrink-0 my-auto w-4 aspect-square"
            alt=""
          />
          <span>Sign Up</span>
        </Link>
        <Link
          to="/signin"
          className="flex overflow-hidden gap-1.5 px-8 py-2 text-white bg-indigo-500 rounded-xl border border-solid border-black border-opacity-0 rotate-[2.4492937051703357e-16rad] max-md:px-5"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/08498be8539e426c9aa226bb55b18f78/7535ed08dcc977e04e6f1c69494723533c1bd40a433c4ddacad8e4494fa7c3ab?apiKey=08498be8539e426c9aa226bb55b18f78&"
            className="object-contain shrink-0 my-auto w-4 aspect-square"
            alt=""
          />
          <span>Sign In</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
