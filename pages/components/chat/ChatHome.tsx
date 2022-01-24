import Link from "next/link";
import Styles from "../../../styles/common.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import prisma from "../../../lib/prisma";

interface Props {
  expires: string;
  user: any;
}

interface chatBubble {
  name: string;
  image: string;
  message: string;
}

const ChatHome = ({ user }: Props) => {
  const [Chats, setChats]: [chatBubble[], Function] = useState([]);
  const [message, setMessage] = useState("");

  const fetchChat = () => {
    (async () => {
      let chats = await axios.get("/api/fetchchat");
      setChats(chats?.data?.chats);
    })();
  };

  useEffect((): any => {
    const socket = io(process.env.URL || "", {
      path: "/api/socketio",
    });

    fetchChat();

    socket.on("connect", () => {
      console.log("new User");
    });

    socket.on("disconnect", (reason) => {
      console.log(reason);
    });

    socket.on("chat", async (data) => {
      let chats = await axios.get("/api/fetchchat");
      setChats(chats?.data?.chats);
    });

    if (socket) return () => socket.disconnect();
  }, []);

  const SendMessage = async (message: any) => {
    if (!message) return;
    await axios.post("/api/chat/", {
      message: message,
      name: user.name,
      image: user.image,
    });

    let currMessage: chatBubble = {
      message: message,
      name: user.name,
      image: user.image,
    };

    Chats.push(currMessage);
    setChats([...Chats]);
  };

  return (
    <div className={Styles.chat}>
      <span className={Styles.chatHeader}>
        <span className={Styles.userInfo}>
          <Image
            src={user && user?.image}
            alt="User"
            width="40px"
            height="40px"
          />
          <h3>{user && user?.name}</h3>
        </span>
        <div>
          <Link href="/api/auth/signout">Sign Out</Link>
        </div>
      </span>
      <div className={Styles.chatContainer}>
        <span>
          <div className={Styles.insidechat}>
            {Chats.map((e, i) => {
              return (
                <span key={i}>
                  <div
                    className={
                      e.name != user.name
                        ? Styles.chatbubbleleft
                        : Styles.chatbubbleright
                    }
                    key={i}
                  >
                    <p>{e.name}</p>
                    <span>
                      <Image
                        src={e && e?.image}
                        alt="User"
                        width="25px"
                        height="25px"
                      />
                      {e.message}
                    </span>
                  </div>
                </span>
              );
            })}
          </div>
        </span>
        <input
          type="text"
          placeholder="Enter text to chat"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <span className={Styles.sendbutton}>
          <Image
            src="https://img.icons8.com/ios-glyphs/30/ffffff/filled-sent.png"
            alt="Send Button"
            width="20px"
            height="20px"
            onClick={() => {
              SendMessage(message);
              setMessage("");
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default ChatHome;
