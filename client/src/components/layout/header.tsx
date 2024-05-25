import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  href: string;
  isActive: boolean;
};

export default function Nav({ children, href, isActive }: PropsType) {
  return (
    <nav className="py-4 px-6 text-sm font-medium">
      <div>
        <a
          href={href}
          className={`block px-3 py-2 rounded-md ${
            isActive ? "bg-sky-500 text-white" : "bg-slate-50"
          }`}
        >
          {children}
        </a>
      </div>
    </nav>
  );
}
