"use client";
import { data } from "@/constants/data";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import bigLogo from "../../../../public/assets/svgs/big_logo.svg";
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
    <Box className="w-full -bottom-96 relative font-sans  h-96 pt-20">
      <Image
        className="w-full relative"
        objectFit="cover"
        priority={true}
        width={900}
        src={data.images.regImage}
        alt=""
      />
      <Box className="flex items-center justify-center top-20 max-w-[650%] pl-4 absolute flex-row">
        <Box className="w-full">
          <h2 className=" text-lg text-white font-bold">
            {data.register.title}
          </h2>
          <h1 className="flex justify-between flex-row text-4xl text-purple-500 font-bold">
            {data.register.town}
            <Button className="px-2  border text-sm border-purple-500 rounded-full py-1 text-purple-500">
              {data.register.button}
              <ArrowForwardIcon />
            </Button>
          </h1>
          <p className="py-1 text-xs text-white">{data.register.body}</p>
        </Box>
        <Image alt="" width={100} src={bigLogo} />
      </Box>
      <Box
        className="flex font-sans relative
       flex-col items-center justify-center"
      >
        <h1 className="pt-20 text-xl text-center font-bold">
          {data.register.title2}
        </h1>
        <p className=" text-gray-400 text-center max-w-[660px]">
          {data.register.body2}
        </p>
        <Box className="pt-20 relative   ">
          <Image className="" alt="" src={data.images.line} />
          <Box className="flex relative mlg:w-full flex-row">
            {/* <Image
              className=" rounded-full -translate-y-40 translate-x-24 p-2 w-24 h-24 border-2 items-center justify-center border-purple-500"
              alt=""
              width={100}
              src={data.images.image}
            />
            <Image
              className=" rounded-full -translate-y-[270px] mlg:translate-x-32 p-2 w-24 h-24 border-2 items-center justify-center border-green-900"
              alt=""
              width={100}
              src={data.images.image}
            />
            <Image
              className="rounded-full -translate-y-40 mlg:translate-x-44 p-2 w-24 h-24 border-2 items-center justify-center border-red-500"
              alt=""
              width={100}
              src={data.images.image}
            />
            <Image
              className="rounded-full -translate-y-40 mlg:translate-x-60 p-2 w-24 h-24 border-2 items-center justify-center border-blue-500"
              alt=""
              width={100}
              src={data.images.image}
            />
            <Image
              className="rounded-full -translate-y-40 mlg:translate-x-72 p-2 w-24 h-24 border-2 items-center justify-center border-red-500"
              alt=""
              width={100}
              src={data.images.image}
            />
            <Image
              className="rounded-full -translate-y-[270px] mlg:translate-x-96 p-2 w-24 h-24 border-2 items-center justify-center border-cyan-500"
              alt=""
              width={100}
              src={data.images.image}
            />
            <Image
              className="rounded-full -translate-y-40 mlg:translate-x-[420px] translate-x-[0px] p-2 w-24 h-24 border-2 items-center justify-center  border-orange-400"
              alt=""
              width={100}
              src={data.images.image}
            /> */}
          </Box>
        </Box>
        <Button className="absolute bottom-24 border border-purple-500 rounded-full px-4 py-2 text-purple-500">
          {data.register.button} Now
          <ArrowForwardIcon />
        </Button>
      </Box>
      <Box>
        <Box className=" items-center font-sans justify-center flex flex-col">
          <Image className="w-full" src={data.images.six} alt="" />
          <Box className="pt-4 pl-4 w-full">
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
        <Box className="flex justify-end w-full pr-4 flex-row">
          <Box className="flex w-10 ml-2 items-center justify-center border border-purple-500 rounded-full h-10">
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
          <Box className="flex pt-10 gap-1 flex-col justify-center items-center">
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
          <h1 className="text-center pt-16 text-2xl font-bold">
            Want To Be A Part Of Abuja’s Biggest Tech Community?
          </h1>
          <Link
            className="flex flex-row items-center text-lg w-fit text-purple-500 border-2 border-purple-500 rounded-full font-sans p-2 mt-8"
            href={"/"}
          >
            {data.connect.largeButon} <RightArr className=" text-purple-500" />
          </Link>
        </Box>
        <Box className="flex pt-4 my-4 border-purple-400 border-t flex-row justify-between">
          <Box className=" gap-3 flex flex-row ">
            <Facebook />
            <Instagram />
            <Twitter />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
