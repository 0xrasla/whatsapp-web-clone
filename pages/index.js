import Head from "next/head";
import { useRouter } from "next/router";
import { prisma } from "./db/client";

export const getServerSideProps = async (ctx) => {
  const users = await prisma.user.findMany();
  return {
    props: {
      message: "Hello World",
      data: JSON.stringify(users),
    },
  };
};

export default function Home({ message, data }) {
  const route = useRouter();
  const redirect = (url) => route.push(url);

  return (
    <div>
      <Head>
        <title>Let&apos; Chat!</title>
        <meta name="description" content="Website to chat!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container-home">
        <h1>Lets Chat</h1>
        <p>
          Lets chat is an online chatting platform where you can find new
          friends to chat with
        </p>
        <h3>Login to Continue Chatting...</h3>
        <button onClick={() => redirect("/auth/login")}>Login</button>
      </main>
    </div>
  );
}
