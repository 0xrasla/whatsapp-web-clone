import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    "Set-Cookie",
    serialize("LID", String(""), {
      path: "/",
      maxAge: -1,
    })
  );

  res.json({
    message: "Logged Out!😚",
  });
};
