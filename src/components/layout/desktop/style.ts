"use client";
import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

export const DesktopLayoutWrapper = styled(Box)`
  min-height: 95vh;
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
export const DTHeaderWrap = styled(Box)`
  padding: 10px 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
`;
