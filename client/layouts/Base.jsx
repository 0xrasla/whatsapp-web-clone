import React from "react";
import Sidebar from "../components/Sidebar";
import { Box } from "@chakra-ui/react";

const BaseLayout = ({ children }) => {
  return (
    <Box display={"flex"} height={"100vh"} width={"100vw"}>
      <Sidebar />
      {children}
    </Box>
  );
};

export default BaseLayout;
