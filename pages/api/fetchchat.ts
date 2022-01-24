import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const fetch = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let allChats = await prisma.chat.findMany();
    return res.json({ chats: allChats, ok: true });
  } catch (e) {
    return res.json({
      message: e,
      ok: false,
    });
  }
};

export default fetch;
