import { ReactNode } from "react";
import Nav from "./header";
import { NavType } from "../../models/navtype";

export const Layout = ({ children }: { children: ReactNode }) => {
  const navlist: NavType[] = [
    {
      title: "New Release",
      href: "/",
      isActive: true,
    },
    {
      title: "New Release",
      href: "/home",
      isActive: true,
    },
  ];

  return (
    <div>
      <div className="flex space-x-3">
        {navlist.map((item) => (
          <Nav key={item.href} href={item.href} isActive={item.isActive}>
            {item.title}
          </Nav>
        ))}
      </div>
      {children}
    </div>
  );
};
