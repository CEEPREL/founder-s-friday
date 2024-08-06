"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { data } from "@/constants/data";
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
      <Box className="flex flex-col relative pt-16 bg-blac mlg:pt-40 pl-5">
        <Box className="flex flex-col w-full">
          <Box className="flex flex-col max-w-full">
            <h3 className="font-sans text-xs mlg:text-sm font-semibold">
              {data.connect.preText}
            </h3>
            <h1 className="font-sans font-bold text-[25px] text-purple-700">
              {data.connect.BoldText}
            </h1>
            <p className="pt-5 text-sm tracking-wider font-sans w-[97%]">
              {data.connect.textBody}
            </p>
            <Link
              className="flex flex-row items-center text-lg w-fit text-purple-500 border-2 border-purple-500 rounded-full font-sans p-2 mt-4"
              href={"/"}
            >
              {data.connect.largeButon}
              <RightArr className=" text-purple-500" />
            </Link>
            <h6 className=" font-sans text-xs pt-3  text-purple-900">
              {data.connect.postText}
            </h6>
            <Box className="flex flex-col">
              <Box className="flex relative w-full flex-row h-[50px] mt-10">
                <Svg1 />
                <Svg2 />
                <Svg3 />
                <Svg4 />
                <Svg5 />
                <Box className="flex  w-full">
                  <Image
                    width={800}
                    alt="line"
                    className=" top-0 right-0 mlg: absolute"
                    src={data.svgs.line}
                  />
                </Box>

                <Box className="flex w-full gap-2 items-center justify-center right-0 absolute">
                  <Box className=" relative w-full right-10">
                    <motion.div
                      animate={{ y: 0 }}
                      initial={{ y: -1000 }}
                      className="absolute top-32 right-32"
                    >
                      <Image width={220} src={data.images.one} alt="" />
                    </motion.div>
                    <motion.div
                      animate={{ x: 0 }}
                      initial={{ x: 450 }}
                      transition={{ delay: 0.2, duration: 0.2 }}
                      className="right-0 top-52 absolute"
                    >
                      <Image width={150} src={data.images.two} alt="" />
                    </motion.div>
                    <motion.div
                      animate={{ y: 0, scale: 1 }}
                      initial={{ scale: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="absolute right-[200px] top-96 "
                    >
                      <Image width={150} src={data.images.three} alt="" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: 360, scale: 1 }}
                      initial={{ y: 0, scale: 0 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="absolute right-[90px] top-[400px]"
                    >
                      <Image width={100} src={data.images.four} alt="" />
                    </motion.div>
                  </Box>
                </Box>
              </Box>
              <h6 className="font-sans mt-4 text-xs pt-3 font-semibold">
                {data.connect.lastText}
              </h6>
            </Box>
          </Box>
        </Box>
        <Box className=" flex flex-row z-10 relative -bottom-[500px]">
          <Box className=" gap-5 flex flex-row bottom-0  relative ">
            <Image
              src={data.images.five}
              className="pl-20 absolute w-[50%]"
              alt=""
            />
          </Box>
          <Box className=" w-full border-t-2 border-b-2 items-center relative border-l-2 border-separate  border-purple-700 rounded-2xl">
            <Image src={data.images.five} className="p-4 w-full" alt="" />
            <h1 className="flex ml-10 w-[80%] absolute bg-white -top-4 justify-center bg-blac text-2xl font-sans font-bold">
              {data.who.title}
            </h1>
            <p className="pt-16 w-full pl-4 text-gray-400">{data.who.body}</p>
            <Box className="flex  flex-col gap-4 py-8">
              <Button className="flex mx-4 mt-12 items-center px-12 py-1 text-white justify-center rounded-full bg-purple-500">
                {data.who.button1}{" "}
                <ArrowForwardIcon className=" text-purple-500" />
              </Button>
              <Button className="flex mx-4 items-center py-1  text-purple-600 justify-center rounded-full border border-purple-500">
                {data.who.button2} <MoneyBag />
              </Button>
              <h6 className="flex absolute pl-4 bg-white w-full justify-cente bg-blac text-xs font-sans font-bold">
                {data.who.postTxt}
              </h6>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Hero;
