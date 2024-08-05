"use client";
import { useState } from "react";
import { data } from "@/constants/data";
import Image from "next/image";
import React from "react";
import { DTHeaderWrap } from "./style";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="fixed w-full z-50 bg-white">
      <DTHeaderWrap>
        <Link
          href={"/"}
          className="flex flex-row items-center justify-center gap-1"
        >
          <Image
            objectFit="cover"
            width={30}
            alt="logo"
            src={data.logo.logo}
            priority
          />
          <h1 className=" font-bold">{data.logo.title}</h1>
        </Link>
        <Box className="flex flex-row gap-32 items-center justify-center">
          <Box className="flex flex-row gap-10 items-center justify-center">
            {data.headers.map((item, index) => (
              <Box key={index}>
                <Link
                  onClick={() => handleClick(index)}
                  className={
                    activeIndex === index ? "text-violet-500" : "text-black"
                  }
                  href={item.uri}
                >
                  {item.title}
                </Link>
              </Box>
            ))}
          </Box>
          <Link
            className="text-violet-500 border border-violet-500 rounded-xl px-3 p-1"
            href={data.auth.title.uri}
          >
            {data.auth.title.title}{" "}
            <ArrowForwardIcon className=" text-violet-500" />
          </Link>
        </Box>
      </DTHeaderWrap>
      <Box className=" border-b border-gray-300" />
    </div>
  );
}

export default Header;
