import React from "react";

const MobileNav = () => {
  const [toggled, setToggled] = React.useState(false);

  return (
    <nav className="lg:hidden flex justify-between items-center font-medium">
      <div
        onClick={() => setToggled((prevToggle) => !prevToggle)}
        className={`space-y-1 cursor-pointer ${toggled ? "opacity-0" : ""}`}
      >
        <span className="block h-0.5 w-8 bg-black"></span>
        <span className="block h-0.5 w-7 bg-black"></span>
        <span className="block h-0.5 w-6 bg-black"></span>
      </div>

      {toggled && (
        <div className="fixed flex bg-stone-100 bg-opacity-90 bottom-0 left-0 w-full h-screen items-center justify-center z-40">
          <div
            onClick={() => setToggled((prevToggle) => !prevToggle)}
            className="absolute p-10 cursor-pointer top-0 right-0"
          >
            <div className="-space-y-0.5 absolute top-11 right-1 mx-8 md:mx-16 lg:mx-32">
              <span className="block h-0.5 w-6 bg-black rotate-45"></span>
              <span className="block h-0.5 w-6 bg-black -rotate-45"></span>
            </div>
          </div>
          <ul className=" flex flex-col gap-16 items-center font-l text-lg">
            <li>
              <a href="/">Startseite</a>
            </li>
            <li>
              <a href="/Gastronomie">Gastronomie</a>
            </li>
            <li>
              <a href="/Countryfest">Countryfest</a>
            </li>
            <li>
              <a href="/Preise">Preise</a>
            </li>
            <li>
              <a href="/Service">Service</a>
            </li>
            <li>
              <a href="/Kontakt">Kontakt</a>
            </li>
            <li>
              <a href="/Impressum">Impressum</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
