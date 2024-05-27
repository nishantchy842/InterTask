import { ReactNode, useRef } from "react";
import Nav from "./header";
import { NavType } from "../../models/navtype";
import { useNavigate } from "react-router-dom";

export const Layout = ({ children }: { children: ReactNode }) => {
  const navlist: NavType[] = [
    {
      title: "All Movies",
      href: "/",
    },
    {
      title: "New Release",
      href: "/new",
    },
    {
      title: "Top Rated",
      href: "/toprated",
    },

    {
      title: "Genre",
      href: "/genre",
    },
  ];

  const ref = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  return (
    <div>
      <div className="flex space-x-3 items-center w-full justify-center">
        {navlist.map((item) => (
          <Nav key={item.href} href={item.title === "Genre" ? "" : item.href}>
            {item.title}
          </Nav>
        ))}
        <div className="flex">
          <input
            ref={ref}
            id="email"
            name="email"
            type="email"
            required
            className="block w-[180px] border-0 p-1.5 rounded-l-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            placeholder="Search movie..."
          />
          <div>
            <button
              type="button"
              className="flex w-full justify-center rounded-r-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                navigate("/", {
                  state: { title: ref?.current?.value },
                });
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
