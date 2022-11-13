import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { BsFillFilePersonFill } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import axios from "../lib/axios";

const SidebarOptions = [
  {
    title: "Personal",
    icon: BsFillFilePersonFill,
    id: 0,
  },
  {
    title: "Groups",
    icon: AiOutlineUsergroupAdd,
    id: 1,
  },
  {
    title: "Settings",
    icon: FiSettings,
    id: 2,
  },
];

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const getListofFriends = async () => {
      const res = await axios.get("/user/getall", {});
    };

    getListofFriends();
  }, []);

  return (
    <Flex width={"20%"} bg={"gray.700"}>
      <Flex
        pt={"20px"}
        width={"15%"}
        bg={"gray.900"}
        direction={"column"}
        alignItems={"center"}
        gap={"20px"}
      >
        {SidebarOptions.map((e, i) => {
          return (
            <Box
              key={i}
              _hover={{
                color: i != activeTab ? "red.700" : "",
              }}
              onClick={(e) => {
                setActiveTab(i);
              }}
              color={activeTab == i ? "whatsapp.400" : ""}
            >
              <e.icon size={25} cursor={"pointer"} />
            </Box>
          );
        })}
      </Flex>
      <Box
        height={"full"}
        width={"85%"}
        display={"flex"}
        justifyContent={"center"}
      >
        {activeTab == 0 ? (
          <Personal />
        ) : activeTab == 1 ? (
          <Groups />
        ) : activeTab == 2 ? (
          <Settings />
        ) : null}
      </Box>
    </Flex>
  );
};

function Personal() {
  return <h1>Personal</h1>;
}

function Groups() {
  return <h2>Groups</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}

export default Sidebar;
