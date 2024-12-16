"use client";
import { Drawer } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import NavigationBarDrawer from "./NavigationBarDrawer";

const NavigationBar = () => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

  const handleOpenDrawer = () => {
    console.log("click");

    setToggleDrawer(true);
  };

  const handleCloseDrawer = () => {
    setToggleDrawer(false);
  };

  return (
    <nav className="z-50 relative flex justify-center">
      <div className="flex justify-center">
        <Image
          src={"/img/logo-no-bg-color.png"}
          alt="Libo"
          width={81}
          height={81}
        />
      </div>
      <div className="absolute top-[50%] right-4 translate-y-[-50%]">
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
