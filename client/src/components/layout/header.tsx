import { ReactNode, memo } from "react";
import { useLocation } from "react-router-dom";
import { useGenre } from "../../hook/useGenre";

type PropsType = {
  children: ReactNode;
  href: string;
};

function Nav({ children, href }: PropsType) {
  const location = useLocation();

  const { pathname } = location;

  const { fetchGenre, data, loading, setDropdown, dropDown } = useGenre();

  return (
    <nav className="py-4 px-6 text-sm font-medium">
      <div>
        {href ? (
          <a
            href={href}
            className={`block px-3 py-2 rounded-md ${
              pathname === href ? "bg-sky-500 text-white" : "bg-slate-50 border"
            }`}
          >
            {children}
          </a>
        ) : (
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className={` ${
                  pathname.split("/")[1] === "genre"
                    ? "bg-sky-500 text-white"
                    : "bg-slate-50 border"
                } inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 `}
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => (!dropDown ? fetchGenre() : setDropdown(false))}
              >
                {loading ? "loading.." : "Genres"}
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`${
                dropDown ? "" : "hidden"
              } absolute max-h-96 h-fit overflow-y-auto right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              {data &&
                data.map((item) => {
                  return (
                    <div
                      className="py-1 hover:bg-slate-300"
                      role="none"
                      key={item.id}
                    >
                      <a
                        href={`/genre/${item.title}`}
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        id="menu-item-0"
                      >
                        {item.title}
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default memo(Nav);
