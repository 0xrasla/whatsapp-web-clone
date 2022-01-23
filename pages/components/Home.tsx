import Styles from "../../styles/common.module.scss";
import Link from "next/link";

const Home = () => {
  return (
<<<<<<< HEAD
    <div className={Styles.container}>
      <h1>Welcome to Let&apos;sChat </h1>
      <p>
        Let&apos;s Chat is an online platform for chating with new தமிழ் பேசும்
        நல்உள்ளங்கள்
=======
    <div>
      <h1 className="text-4xl font-bold text-center">Lets Chat 😎</h1>
      <p className="text-lg text-center font-bold w-45 pt-10 from-neutral-300">
        Lets Chat is an online chatting place, where you can meet new peoples
        and chat with them!
>>>>>>> main
      </p>
      <p>Made with 💖 for bae</p>
      <Link href="/api/auth/signin">Signin</Link>
    </div>
  );
};

export default Home;
