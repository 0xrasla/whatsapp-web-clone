import type { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "../../types/common.types";
import prisma from "../../lib/prisma";

const chat = async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (req.method == "POST") {
    res?.socket?.server?.io?.emit("chat", req.body);

    await prisma.chat.create({
      data: {
        message: req?.body?.message,
        image: req?.body?.image,
        name: req?.body?.name,
      },
    });

    return res.json({
      ok: true,
    });
  }

  return res.json({
    ok: false,
  });
};

export default chat;
