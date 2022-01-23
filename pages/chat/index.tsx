import { NextPage } from "next";
import useAuth from "../../hooks/useAuth";
import Chat from "./Chat";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import axios from "axios";

const Chatapp: NextPage = () => {
  const [payload] = useAuth();
  const [Chats, setChats]: [string[], Function] = useState([]);

  useEffect((): any => {
    const socket = io(process.env.URL || "", {
      path: "/api/socketio",
    });

    socket.on("connect", () => {
      console.log("new User");
    });

    socket.on("disconnect", (reason) => {
      console.log(reason);
    });

    socket.on("chat", (message) => {
      Chats.push(message);
      setChats([...Chats]);
      console.log(Chats);
    });

    if (socket) return () => socket.disconnect();
  }, []);

  const SendMessage = (message: {}) => {
    if (!message) return;
    axios.post("/api/chat", {
      message: message,
    });
  };

  return <Chat chats={Chats} payload={payload} cb={SendMessage} />;
};

export default Chatapp;
