import type { NextPage } from "next";
<<<<<<< HEAD
import { useSession } from "next-auth/react";
import Home from "./components/Home";
import ChatHome from "./components/chat/ChatHome";

const HomePage: NextPage = () => {
  const { data: session, status } = useSession();
=======
import Head from "next/head";
import { useRouter } from "next/router";
import HomePage from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";

import { useState } from "react";
const Home: NextPage = () => {
  const router = useRouter();
>>>>>>> main

  if (status === "authenticated") {
    return (
      <>
        <ChatHome expires={session?.expires || ""} user={session?.user} />
      </>
    );
  }

<<<<<<< HEAD
  return <Home />;
=======
  const LoginResponse = (res: { tokenId: "" }) => {
    axios.defaults.headers.common["Authorization"] = res.tokenId;

    axios.get("/api/login").then((res) => {
      setuserAllowed(res.data.ok);
      if (!res.data.ok) {
        router.reload();
        console.log("error");
      } else {
        router.push("/chat");
      }
    });
  };

  return (
    <div className="container w-30 p-20 mt-48 bg-black text-gray-100">
      <Head>
        <title>Lets Chat 😎</title>
      </Head>
      <div className="flex flex-col items-center justify-center lg:container lg:mx-auto">
        <HomePage />
        <div className="rounded-lg max-w-md mt-10 flex flex-col">
          <Login LoginResponse={LoginResponse} c_Id={c_Id || ""} /> <br />
          <Logout c_Id={c_Id || ""} />
        </div>
      </div>
    </div>
  );
>>>>>>> main
};

export default HomePage;
