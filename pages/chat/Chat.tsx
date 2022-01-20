import { useState } from "react";
import { Logout } from "../components";

interface Props {
  payload: any;
}

export const Chat = ({ payload }: Props) => {
  const [c_Id, setCid] = useState(process.env.NEXT_PUBLIC_CLIENT_ID);

  return (
    <div>
      <h2>{}</h2>
      <Logout c_Id={c_Id || ""} />
    </div>
  );
};
