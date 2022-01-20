import { NextPage } from "next";
import useAuth from "../../hooks/useAuth";
import { Chat } from "./Chat";

const Chatapp: NextPage = () => {
  const [payload] = useAuth();

  return <Chat payload={payload} />;
};

export default Chatapp;
