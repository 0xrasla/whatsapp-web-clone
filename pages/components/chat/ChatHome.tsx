import Link from "next/link";
import Styles from "../../../styles/common.module.scss";
import Image from "next/image";

interface Props {
  expires: string;
  user: any;
}

const ChatHome = ({ user }: Props) => {
  console.log(user);

  return (
    <div className={Styles.chat}>
      <span className={Styles.chatHeader}>
        <span className={Styles.userInfo}>
          <Image src={user.image} alt="User" width="40px" height="40px" />
          <h3>{user.name}</h3>
        </span>
        <div>
          <Link href="/api/auth/signout">Sign Out</Link>
        </div>
      </span>
      <div className={Styles.chatContainer}>
        <input type="text" />
        <span className={Styles.sendbutton}>
          <Image
            src="https://img.icons8.com/ios-glyphs/30/ffffff/filled-sent.png"
            alt="Send Button"
            width="20px"
            height="20px"
          />
        </span>
      </div>
    </div>
  );
};

export default ChatHome;
