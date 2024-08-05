"use client";
import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";
export const MobileLayoutWrapper = styled(Box)`
  min-height: 95vh;
  @media screen and (min-width: 1023px) {
    display: none;
  }
`;

export const DrawerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  position: absolute;
  width: 65%;
  height: 100vh;
  z-index: 2;
`;
export const MobileHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: transparent;
  position: fixed;
  width: 100%;
  z-index: 10;
  padding: 10px 10px;
  background-color: white;
`;
