import Link from "next/link";
import Styles from "../../../styles/common.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

interface Props {
  expires: string;
  user: any;
}

const ChatHome = ({ user }: Props) => {
  const [Chats, setChats]: [string[], Function] = useState([]);
  const [message, setMessage] = useState("");

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

    socket.on("chat", (data) => {
      console.log(data);
      let message = `${data.user} : ${data.message}`;
      Chats.push(message);
      setChats([...Chats]);
    });

    if (socket) return () => socket.disconnect();
  }, []);

  const SendMessage = async (message: {}) => {
    if (!message) return;
    await axios.post("/api/chat/", {
      message: message,
      user: user.name,
    });

    console.log(Chats);
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
        <div className={Styles.insidechat}>
          {Chats.map((e, i) => {
            return <p key={i}>{e}</p>;
          })}
        </div>
        <input
          type="text"
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
