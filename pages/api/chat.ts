import type { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "../../types/common.types";

export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (req.method == "POST") {
    res?.socket?.server?.io?.emit("chat", req.body.message);

    return res.json({
      ok: true,
    });
  }

  return res.json({
    ok: false,
  });
};
