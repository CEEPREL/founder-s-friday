"use client";
import { data } from "@/constants/data";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import {
  BigLogo,
  Facebook,
  Instagram,
  Twitter,
} from "../../../../public/assets/svgs/svgList";
import Link from "next/link";
import RightArr from "../../../../public/assets/svgs/rightArrow";

function Register() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <Box className="w-full relative font-sans  h-20 pt-20">
      <Image
        className="relative"
        objectFit="cover"
        priority={true}
        src={data.images.regImage}
        alt=""
      />
      <Box className="flex items-center justify-center pl-16 absolute top-24 flex-row">
        <Box className="w-1/2">
          <h2 className=" tracking-wide mlg:text-3xl text-xl text-white font-bold">
            {data.register.title}
          </h2>
          <h1 className=" mlg:text-8xl text-6xl text-purple-500 font-bold">
            {data.register.town}
          </h1>
          <p className="py-6 text-white">{data.register.body}</p>
          <Button className=" border border-purple-500 rounded-full px-8 py-2 text-purple-500">
            {data.register.button}
            <ArrowForwardIcon />
          </Button>
        </Box>
        <BigLogo />
      </Box>
      <Box
        className="flex font-sans relative
       flex-col items-center justify-center"
      >
        <h1 className="pt-20 text-3xl text-center font-bold">
          {data.register.title2}
        </h1>
        <p className=" text-gray-400 text-center max-w-[660px]">
          {data.register.body2}
        </p>
        <Box className="pt-12 relative   ">
          <Image className="" alt="" src={data.images.line} />
          <Box className="flex relative mlg:w-full flex-row"></Box>
        </Box>
        <Button className="absolute bottom-4 border border-purple-500 rounded-full px-8 py-2 text-purple-500">
          {data.register.button} Now
          <ArrowForwardIcon />
        </Button>
      </Box>
      <Box>
        <Box className="pl-16 items-center font-sans justify-center flex flex-row">
          <Image className="w-1/2" src={data.images.six} alt="" />
          <Box className=" gap-4 pl-4 w-1/2">
            <h2 className=" font-bold mlg:text-sm text-xs">
              {data.register2.title}
            </h2>
            <p className="pt-4">{data.register2.body}</p>
            <Button className="mt-4 border bg-purple-500 rounded-full px-8 py-2 text-white">
              {data.register.button}
              <ArrowForwardIcon />
            </Button>
          </Box>
        </Box>
        <Box className="flex justify-end w-full  gap-5 pr-16 flex-row">
          <Box className="flex w-10 gap-5 items-center justify-center border border-purple-500 rounded-full h-10">
            <ArrowBackIcon w={25} h={25} />
          </Box>
          <Box className="flex w-10 items-center justify-center border border-purple-500 rounded-full h-10">
            <ArrowForwardIcon w={25} h={25} />
          </Box>
        </Box>
        <Box>
          <h1 className="text-center text-2xl font-bold">
            {data.register3.title}
          </h1>
          <p className="text-center pt-2 text-lg text-gray-400">
            {data.register3.subtitle}
          </p>
          <Box className="flex pt-10 gap-2 flex-row justify-center items-center">
            {data.attendees.map((item, index) => (
              <Box
                key={index}
                className="flex flex-col items-center justify-center  text-center"
              >
                <Image
                  className="w-44 h-44 border-2 p-4 border-purple-500 rounded-full"
                  alt=""
                  src={item.picture}
                />
                <h3 className=" font-bold text-xl">{item.name}</h3>
                <p className="w-72 text-sm text-gray-700">{item.comment}</p>
              </Box>
            ))}
          </Box>
        </Box>
        <Box>
          <h1 className=" font-bold text-3xl p-16 pb-96">FAQs</h1>
        </Box>
        <Box className="border-b border-gray-400" />
        <Box className="flex items-center pt-6 pl-16 flex-row">
          <Image
            objectFit="cover"
            width={60}
            alt="logo"
            src={data.logo.logo}
            priority
          />
          <h1 className="w-36 text-lg font-bold">{data.logo.title}</h1>
        </Box>
        <Box className="flex flex-col items-center justify-center">
          <h1 className="text-center pt-16 text-4xl font-bold">
            Want To Be A Part Of Abuja’s Biggest Tech <br /> Community?
          </h1>
          <Link
            className="flex flex-row items-center text-2xl w-fit text-purple-500 border-2 border-purple-500 rounded-full font-sans p-2 mt-8"
            href={"/"}
          >
            {data.connect.largeButon} <RightArr className=" text-purple-500" />
          </Link>
        </Box>
        <Box className="flex pt-4  m-16 border-purple-400 border-t flex-row justify-between">
          <Box className=" gap-3 flex flex-row ">
            <Facebook />
            <Instagram />
            <Twitter />
          </Box>
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
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
