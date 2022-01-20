import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Login, Logout, HomePage } from "./components/index";

const Home: NextPage = () => {
  const router = useRouter();

  const [c_Id, setCid] = useState(process.env.NEXT_PUBLIC_CLIENT_ID);
  const [userAllowed, setuserAllowed] = useState(false);

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
};

export default Home;
