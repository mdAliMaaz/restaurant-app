"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [user, setuser] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <Image
          src='/close.png'
          alt='open'
          width={20}
          height={20}
          sizes='100%'
          onClick={() => setOpen(!open)}
        />
      ) : (
        <Image
          className=' cursor-pointer'
          src='/open.png'
          alt='open'
          width={20}
          height={20}
          sizes='100%'
          onClick={() => setOpen(!open)}
        />
      )}

      {open && (
        <div className='bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex flex-col gap-8 items-center justify-center text-3xl z-10'>
          {links.map((item) => (
            <Link key={item.id} href={item.url} onClick={() => setOpen(!open)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href={"/login"} onClick={() => setOpen(!open)}>
              Login
            </Link>
          ) : (
            <Link href={"/order"} onClick={() => setOpen(!open)}>
              Orders
            </Link>
          )}
          <span onClick={() => setOpen(!open)}>
            <CartIcon />
          </span>
        </div>
      )}
    </div>
  );
};

export default Menu;
