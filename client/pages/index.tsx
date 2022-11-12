import { Text, Input, Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Storage from "../config/storage.config";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const redirect = (url: string) => router.push(url);

  const onClick = () => {
    if (!username) return;
    new Storage().set("username", username);
    redirect("/chats");
  };

  return (
    <Box
      width={"70%"}
      margin={"auto"}
      justifyContent={"center"}
      mt={"20"}
      display={"flex"}
      gap={"5"}
      alignItems={"center"}
    >
      <Input
        w={"40%"}
        bg={"white"}
        p={"6"}
        onChange={(e: any) => {
          setUsername(e.target.value);
        }}
        placeholder="Enter your name to Chat!"
        fontFamily={"base"}
        fontSize={"2xl"}
      />
      <Button onClick={onClick}>Start</Button>
    </Box>
  );
}
