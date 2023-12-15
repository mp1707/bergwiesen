import React from "react";

const MobileNav = ({ currentPage }: { currentPage: string }) => {
  const [toggled, setToggled] = React.useState(false);

  return (
    <nav className="lg:hidden flex justify-between items-center font-medium">
      <div
        onClick={() => setToggled((prevToggle) => !prevToggle)}
        className={` flex items-center gap-2 cursor-pointer ${
          toggled ? "opacity-0" : ""
        }`}
      >
        <h1 className="lg:hidden">Menü</h1>
        <div className="space-y-1 ">
          <span className="block h-0.5 w-8 bg-black"></span>
          <span className="block h-0.5 w-7 bg-black"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
        </div>
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
              <a
                href="/"
                className={
                  currentPage === "/"
                    ? "bg-slate-500 text-stone-100 px-2 py-1 rounded-lg"
                    : "px-2 py-1"
                }
              >
                Startseite
              </a>
            </li>
            <li>
              <a
                href="/gastronomie"
                className={
                  currentPage === "/gastronomie"
                    ? "bg-slate-500 text-stone-100 px-2 py-1 rounded-lg"
                    : "px-2 py-1"
                }
              >
                Gastronomie
              </a>
            </li>
            <li>
              <a
                href="/countryfest"
                className={
                  currentPage === "/countryfest"
                    ? "bg-slate-500 text-stone-100 px-2 py-1 rounded-lg"
                    : "px-2 py-1"
                }
              >
                Countryfest
              </a>
            </li>
            <li>
              <a
                href="preise"
                className={
                  currentPage === "/preise"
                    ? "bg-slate-500 text-stone-100 px-2 py-1 rounded-lg"
                    : "px-2 py-1"
                }
              >
                Preise
              </a>
            </li>
            <li>
              <a
                href="/service"
                className={
                  currentPage === "/service"
                    ? "bg-slate-500 text-stone-100 px-2 py-1 rounded-lg"
                    : "px-2 py-1"
                }
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="/kontakt"
                className={
                  currentPage === "/kontakt"
                    ? "bg-slate-500 text-stone-100 px-2 py-1 rounded-lg"
                    : "px-2 py-1"
                }
              >
                Kontakt
              </a>
            </li>
            <li>
              <a
                href="/impressum"
                className={
                  currentPage === "/impressum"
                    ? "bg-slate-500 text-stone-100 px-2 py-1 rounded-lg"
                    : "px-2 py-1"
                }
              >
                Impressum
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
