"use client";
import { Drawer } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import NavigationBarDrawer from "./NavigationBarDrawer";
import Link from "next/link";

const NavigationBar = () => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

  const handleOpenDrawer = () => {
    setToggleDrawer(true);
  };

  const handleCloseDrawer = () => {
    setToggleDrawer(false);
  };

  return (
    <nav className="z-50 relative flex justify-center max-w-screen-2xl m-auto md:justify-between">
      <div className="flex justify-center items-center">
        <Image
          className="md:mx-10 lg:mx-20"
          src={"/img/logo-no-bg-color.png"}
          alt="Libo"
          width={81}
          height={81}
        />
      </div>
      <ul className="hidden md:mx-10 md:flex md:justify-evenly md:items-center md:gap-6 lg:mx-20">
        <li>
          <Link
            className="text-[var(--primary)] font-medium text-sm link-hover"
            href={"/buy"}
          >
            All the cars
          </Link>
        </li>
        <li>
          <Link
            className="text-[var(--primary)] font-medium text-sm link-hover"
            href={"/sell"}
          >
            Sell
          </Link>
        </li>
        <li>
          <Link
            className="text-[var(--primary)] font-medium text-sm link-hover"
            href={"/private-sale"}
          >
            Private Sales
          </Link>
        </li>
        <li>
          <Link
            className="text-[var(--primary)] font-medium text-sm link-hover"
            href={"/about"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="text-[var(--primary)] font-medium text-sm link-hover"
            href={"/support"}
          >
            Support
          </Link>
        </li>
        <li>
          <Link
            className="px-4 py-1 rounded-full border border-[var(--primary)] text-[var(--primary)] font-medium duration-150 hover:bg-[var(--secondary)] hover:duration-150"
            href={"/sign-in"}
          >
            Sign In
          </Link>
        </li>
      </ul>
      <div className="absolute top-[50%] right-4 translate-y-[-50%] md:hidden">
        <button onClick={() => handleOpenDrawer()}>
          <Image src={"/img/menu_car.svg"} alt="menu" width={51} height={51} />
        </button>
      </div>
      <Drawer anchor="top" open={toggleDrawer} onClose={handleCloseDrawer}>
        <NavigationBarDrawer onClose={handleCloseDrawer} />
      </Drawer>
    </nav>
  );
};

export default NavigationBar;
