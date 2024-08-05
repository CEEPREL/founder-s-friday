"use client";
import { data } from "@/constants/data";
import { AddIcon, ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import React from "react";

function WhatWeOffer() {
  return (
    <Box className="flex relative -bottom-[450px] flex-col">
      <h1 className=" text-center pt-24 font-bold text-2xl">
        {data.what.title}
      </h1>
      {data.what.body.map((text, index) => (
        <Box
          key={index}
          className="flex items-center pb-8 pt-16 p-4 justify-between flex-col border-b border-gray-300"
        >
          <h1 className="text-xl font-sans font-bold">{text.title}</h1>
          <p className="flex justify-items-center items-center">
            {text.body}
            <AddIcon />
          </p>
        </Box>
      ))}
      <Box>
        <h1 className="pt-24 ml-4 text-center mb-96 font-bold text-xl">
          {data.empty}
        </h1>
      </Box>
      <Box className="w-full pl-4 pb-10">
        <h3 className="  text-purple-500 font-bold text-xl">
          {data.why.pretext}
        </h3>
        <h1 className=" font-sans text-2xl font-bold">{data.why.title}</h1>
      </Box>
      <Box className="flex flex-col px-4 w-full">
        <Box className="flex flex-col items-center justify-cente p-4 border rounded-2xl w-[100%] shadow-2xl border-purple-500">
          {data.why.circle.map((item, index) => (
            <Box key={index} className={`flex justify-self-center`}>
              <Box
                className={`${
                  index === 0 || index === 3 ? "bg-purple-300" : "bg-purple-500"
                } flex items-center  mlg:w-56 mlg:h-56 m-2 justify-center flex-col rounded-full w-52 h-52 `}
              >
                <h1 className=" text-center font-sans text-lg font-bold">
                  {item.title}
                </h1>
                <p className=" text-center">{item.body}</p>
              </Box>
            </Box>
          ))}
        </Box>
        <Box className="pl-4 pt-8 w-[100%] text-gray-600">
          <h3 className=" font-bold text-black text-2xl">
            {data.why.how.title}
          </h3>
          <h1 className=" font-sans text-lg italic">{data.why.pretext}</h1>
          <p>{data.why.how.body}</p>
          <Box className="flex flex-col">
            <Box className="pt-8  w-full gap-6 flex flex-col">
              <Box className="flex w-full flex-col">
                <label className=" font-bold">Name</label>
                <input
                  className="border rounded-lg border-black
               p-2"
                  placeholder="Full name"
                  type="text"
                />
              </Box>
              <Box className="flex w-full flex-col">
                <label className=" font-bold">
                  Company
                  <span className=" font-extralight text-xs">(optional)</span>
                </label>
                <input
                  className="border rounded-lg border-black
               p-2"
                  placeholder="Company name"
                  type="text"
                />
              </Box>
            </Box>
            <Box className="pt-8  w-full gap-6 flex flex-col">
              <Box className="flex w-full flex-col">
                <label className=" font-bold">Email</label>
                <input
                  className="border rounded-lg border-black
               p-2"
                  placeholder="Email address"
                  type="email"
                />
              </Box>
              <Box className="flex w-full flex-col">
                <label className=" font-bold">Phone</label>
                <input
                  className="border rounded-lg border-black
               p-2"
                  placeholder="Phone number"
                  type="number"
                />
              </Box>
            </Box>
          </Box>
          <Button className="rounded-md bg-purple-600 py-3 mt-8 px-10 text-white">
            Sponsor <ArrowForwardIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default WhatWeOffer;
