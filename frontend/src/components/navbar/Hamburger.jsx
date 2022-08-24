import { useState } from "react";
import { Links } from './Links';

export const Hamburguer = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <section className="MOBILE-MENU flex lg:hidden">
      <div
        className="HAMBURGER-ICON space-y-2 cursor-pointer"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
      </div>

      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        <div
          className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
          onClick={() => setIsNavOpen(false)}
        >
          <svg
            className="h-8 w-8 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[250px]">
          <li className="border-b border-gray-400 my-8 uppercase">
            <Links name="Homepage" />
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <Links name="Tier List" />
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <Links name="Chars" />
          </li>
        </ul>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </section>
  );
};