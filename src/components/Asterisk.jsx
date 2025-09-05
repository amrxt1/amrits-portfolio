"use client";

import { usePathname } from "next/navigation";

const Asterisk = ({ href }) => {
  const path = usePathname();

  const isActive =
    href === "/projects" ? path.startsWith("/projects") : href === path;

  return <span className="font-bold">{isActive ? "*" : " "}</span>;
};

export default Asterisk;
