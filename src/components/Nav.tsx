import React from "react";
import logo from "../../public/LOGOblack1.png";
import { useMediaQuery } from "../util/useMediaQuery";

const Nav = ({ title }: { title: string }) => {
  const [toggled, setToggled] = React.useState(false);

  const largeScreen = useMediaQuery("(min-width: 1280px)");

  return (
    <nav className="relative flex justify-between items-center pt-6 pb-3 font-medium mx-8 md:mx-16 lg:mx-32">
      <a href="/">
        <img src={logo.src} width={80} alt="logo campingpark" />
      </a>
      {/* <svg
        className="absolute bottom-0 left-1/2 -trg-black-x-1/2"
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 2"
          strokeWidth={2}
          stroke="#282828"
          strokeLinecap="round"
        />
      </svg> */}
      {!largeScreen && <h1>{title}</h1>}
      {/* burger on mobile */}
      {!largeScreen && (
        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className={`space-y-1 cursor-pointer ${toggled ? "opacity-0" : ""}`}
        >
          <span className="block h-0.5 w-8 bg-black"></span>
          <span className="block h-0.5 w-7 bg-black"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
        </div>
      )}
      {/* menu on desktop */}
      {largeScreen && (
        <ul className="flex justify-end gap-7">
          <li>
            <a href="/" className="text-sm">
              Startseite
            </a>
          </li>
          <li>
            <a href="/Gastronomie" className="text-sm">
              Gastronomie
            </a>
          </li>
          <li>
            <a href="/Countryfest" className="text-sm">
              Countryfest
            </a>
          </li>
          <li>
            <a href="/Preise" className="text-sm">
              Preise
            </a>
          </li>{" "}
          <li>
            <a href="/Service" className="text-sm">
              Service
            </a>
          </li>
          <li>
            <a href="/Kontakt" className="text-sm">
              Kontakt
            </a>
          </li>
          <li>
            <a href="/Impressum" className="text-sm">
              Impressum
            </a>
          </li>
        </ul>
      )}
      {/* menu on mobile */}
      {toggled && !largeScreen && (
        <div className="fixed flex bg-white bg-opacity-95 bottom-0 left-0 w-full h-screen items-center justify-center z-40">
          <div
            onClick={() => setToggled((prevToggle) => !prevToggle)}
            className="absolute p-10 cursor-pointer top-0 right-0"
          >
            <div className="-space-y-0.5 absolute top-11 right-1 mx-8 md:mx-16 lg:mx-32">
              <span className="block h-0.5 w-6 bg-black rotate-45"></span>
              <span className="block h-0.5 w-6 bg-black -rotate-45"></span>
            </div>
          </div>
          <ul className=" flex flex-col gap-16 items-center font-l">
            <li>
              <a href="/" className="text-lg">
                Startseite
              </a>
            </li>
            <li>
              <a href="/Gastronomie" className="text-lg">
                Gastronomie
              </a>
            </li>
            <li>
              <a href="/Countryfest" className="text-lg">
                Countryfest
              </a>
            </li>
            <li>
              <a href="/Preise" className="text-lg">
                Preise
              </a>
            </li>{" "}
            <li>
              <a href="/Service" className="text-lg">
                Service
              </a>
            </li>
            <li>
              <a href="/Kontakt" className="text-lg">
                Kontakt
              </a>
            </li>
            <li>
              <a href="/Impressum" className="text-lg">
                Impressum
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
