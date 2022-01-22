import { useRef, useState } from "react";
import ChatStyles from "../../styles/Chat.module.css";

interface Props {
  payload: payload;
  chats: string[];
  cb: Function;
}

interface payload {
  name: string;
}

const Chat = ({ payload, chats, cb }: Props) => {
  const [c_Id, setCid] = useState(process.env.NEXT_PUBLIC_CLIENT_ID);
  const [message, setMessage] = useState("");

  return (
    <div className={ChatStyles.container}>
      <div className="">
        <h2 className={ChatStyles.header}>
          Welcome {payload && payload.name ? payload.name : ""},{" "}
          <div>Lets Chat!</div>
        </h2>
      </div>
      <div className={ChatStyles.chatdiv}>
        <div>
          {chats &&
            chats.map((e, i) => {
              return (
                <div key={i} className={ChatStyles.chatbubbleleft}>
                  {e}
                  <br />
                </div>
              );
            })}
        </div>
        <input
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          type="text"
          placeholder="Enter Your text 🤗"
        />
        <button
          className={ChatStyles.buttons}
          onClick={() => {
            cb(message);
            setMessage("");
          }}
        >
          <span>
            <img
              src="https://img.icons8.com/ios-glyphs/30/eeeeee/filled-sent.png"
              alt="Its Mic"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Chat;
