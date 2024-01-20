import React from "react";

import Link from "next/link";
export default function Navigation() {
  const links = [
    {
      name: "Tools",
      url: "/",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "Code",
      url: "/code",
    },
    {
      name: "Videos",
      url: "/videos",
    },
  ];
  return (
    <nav className="fixed w-screen top-5 z-50 flex justify-between items-center uppercase text-black font-black">
      {links.map((link) => (
        <Link href={link.url} key={link.name}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
