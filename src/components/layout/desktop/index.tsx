import React from "react";
import { DesktopLayoutWrapper } from "./style";
import { JSXProps } from "@/app/layout";
import Header from "./header";
import { Box } from "@chakra-ui/react";

function DesktopLayout({ children }: JSXProps) {
  return (
    <DesktopLayoutWrapper>
      <Header />
      <Box>{children}</Box>
    </DesktopLayoutWrapper>
  );
}

export default DesktopLayout;
