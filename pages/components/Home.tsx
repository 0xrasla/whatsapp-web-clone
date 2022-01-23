import Styles from "../../styles/common.module.scss";
import Link from "next/link";

const Home = () => {
  return (
    <div className={Styles.container}>
      <h1>Welcome to Let&apos;sChat </h1>
      <p>
        Let&apos;s Chat is an online platform for chating with new தமிழ் பேசும்
        நல்உள்ளங்கள்
      </p>
      <p>Made with 💖 for bae</p>
      <Link href="/api/auth/signin">Signin</Link>
    </div>
  );
};

export default Home;
