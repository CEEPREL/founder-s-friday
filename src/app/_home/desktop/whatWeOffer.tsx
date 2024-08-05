"use client";
import { data } from "@/constants/data";
import { AddIcon, ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import React from "react";

function WhatWeOffer() {
  return (
    <Box className="flex flex-col">
      <h1 className=" text-center pt-24 font-bold text-2xl">
        {data.what.title}
      </h1>
      {data.what.body.map((text, index) => (
        <Box className="flex items-center pb-8 pt-16 mx-20 justify-between flex-row border-b border-gray-300">
          <Box
            key={index}
            className="flex bg-purple-500 w-4 h-4 rounded-full"
          />
          <h1 className="text-xl font-sans font-bold">{text.title}</h1>
          <p className="flex  w-[850px] items-center">{text.body}</p>
          <AddIcon />
        </Box>
      ))}
      <Box>
        <h1 className="pt-24 ml-20 mb-96 font-bold text-2xl">{data.empty}</h1>
      </Box>
      <Box className="mlg:max-w-[40%] max-w-[40%] pl-20 pb-10">
        <h3 className="  text-purple-500 font-bold text-xl">
          {data.why.pretext}
        </h3>
        <h1 className=" font-sans text-4xl font-bold">{data.why.title}</h1>
      </Box>
      <Box className="flex flex-row px-20 w-full">
        <Box className="grid grid-cols-2 p-4 border rounded-2xl w-[50%] shadow-2xl border-purple-500">
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
        <Box className="pl-10 w-[50%] text-gray-600 gap-3">
          <h3 className=" font-bold text-black text-2xl">
            {data.why.how.title}
          </h3>
          <h1 className=" font-sans text-lg italic">{data.why.pretext}</h1>
          <p>{data.why.how.body}</p>
          <Box className="flex flex-col">
            <Box className="pt-8  w-full gap-6 flex flex-row">
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
            <Box className="pt-8  w-full gap-6 flex flex-row">
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
          <Button className=" rounded-md bg-purple-600 py-3 mt-12 px-10 text-white">
            Sponsor <ArrowForwardIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default WhatWeOffer;
