"use client";
import React from "react";
import MobileLogo from "../../../../public/assets/svgs/logo.svg";
import { MobileHeaderWrapper } from "./style";
import SideDrawer from "./drawer";
import Image from "next/image";

function Header() {
  return (
    <MobileHeaderWrapper>
      <Image alt="" width={50} src={MobileLogo} />
      <SideDrawer />
    </MobileHeaderWrapper>
  );
}

export default Header;
