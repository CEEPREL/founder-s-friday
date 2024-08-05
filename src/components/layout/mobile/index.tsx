import React from "react";
import { MobileLayoutWrapper } from "./style";
import { JSXProps } from "@/app/layout";
import { Box } from "@chakra-ui/react";
import Header from "./header";

export default function MobileLayout({ children }: JSXProps) {
  return (
    <MobileLayoutWrapper>
      <Header />
      <Box>{children}</Box>
    </MobileLayoutWrapper>
  );
}
