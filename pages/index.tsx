import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Home from "./components/Home";
import ChatHome from "./components/chat/ChatHome";

const HomePage: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <ChatHome expires={session?.expires || ""} user={session?.user} />
      </>
    );
  }

  return <Home />;
};

export default HomePage;
