"use client";
import Image from "next/image";
import React from "react";
import { data } from "@/constants/data";
import { HeroWrapper } from "./style";
import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import RightArr from "../../../../public/assets/svgs/rightArrow";
import {
  Svg1,
  Svg2,
  Svg3,
  Svg4,
  Svg5,
  MoneyBag,
} from "../../../../public/assets/svgs/svgList";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function Hero() {
  return (
    <>
      <Box className="flex relative ">
        <Box className="flex  w-full">
          <Image
            width={800}
            alt="line"
            className=" top-0 right-10 mlg: absolute"
            src={data.svgs.line}
          />
        </Box>

        <Box className="flex w-full right-0 absolute">
          <Box className=" relative w-full right-10">
            <Box className="absolute top-32 right-44">
              <Image width={220} src={data.images.one} alt="" />
            </Box>
            <Box className="right-4 top-52 absolute">
              <Image width={220} src={data.images.two} alt="" />
            </Box>
            <Box className="absolute right-[250px] top-96 ">
              <Image width={150} src={data.images.three} alt="" />
            </Box>
            <Box className="absolute right-[120px] top-[450px]">
              <Image width={100} src={data.images.four} alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="flex pt-20 bg-blac mlg:pt-40 pl-20 flex-row">
        <Box className="flex flex-col w-[60%]">
          <Box className="flex flex-col max-w-[90%]">
            <h3 className="font-sans text-xs mlg:text-sm font-semibold">
              {data.connect.preText}
            </h3>
            <h1 className="font-sans font-bold text-[30px] text-purple-700">
              {data.connect.BoldText}
            </h1>
            <p className="pt-10 text-lg tracking-wider font-sans w-[97%]">
              {data.connect.textBody}
            </p>
            <Link
              className="flex flex-row items-center text-2xl w-fit text-purple-500 border-2 border-purple-500 rounded-full font-sans p-3 mt-8"
              href={"/"}
            >
              {data.connect.largeButon}{" "}
              <RightArr className=" text-purple-500" />
            </Link>
            <h6 className=" font-sans text-xs pt-3  text-purple-900">
              {data.connect.postText}
            </h6>
            <Box className="flex flex-row gap-8 h-[10px] mt-10">
              <Svg1 />
              <Svg2 />
              <Svg3 />
              <Svg4 />
              <Svg5 />
            </Box>
            <h6 className="font-sans mt-12 text-xs pt-3 font-semibold">
              {data.connect.lastText}
            </h6>
          </Box>
        </Box>
      </Box>
      <Box className="mlg:pt-56 gap-5 flex flex-row w-full pt-20 z-10 relative ">
        <Image src={data.images.five} className="pl-20 w-[50%]" alt="" />
        <Box className="pr-20 w-[40%] border-t-2 border-b-2  relative border-l-2 border-separate mr-5 border-purple-700 rounded-2xl">
          <h1 className="flex  absolute bg-white -top-4 w-full justify-cente ml-8 bg-blac text-2xl font-sans font-bold">
            {data.who.title}
          </h1>
          <p className="pt-16 pl-4 text-gray-400">{data.who.body}</p>
          <Box className="flex pl-4 flex-row gap-4 pt-16">
            <Button className="flex items-center px-12 py-1 text-white justify-center rounded-full bg-purple-500">
              {data.who.button1}{" "}
              <ArrowForwardIcon className=" text-purple-500" />
            </Button>
            <Button className="flex items-center px-12 py-1  text-purple-600 justify-center rounded-full border border-purple-500">
              {data.who.button2} <MoneyBag />
            </Button>
            <h6 className="flex absolute bg-white -bottom-3 w-full justify-cente ml-8 bg-blac text-xs font-sans font-bold">
              {data.who.postTxt}
            </h6>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Hero;
