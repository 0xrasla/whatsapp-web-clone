import type { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "../../types/common.types";

const chat = async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (req.method == "POST") {
<<<<<<< HEAD
    res?.socket?.server?.io?.emit("chat", req.body);
=======
    res?.socket?.server?.io?.emit("chat", req.body.message);
>>>>>>> main

    return res.json({
      ok: true,
    });
  }

  return res.json({
    ok: false,
  });
};

export default chat;
