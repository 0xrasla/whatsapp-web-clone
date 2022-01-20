import type { NextApiRequest, NextApiResponse } from "next";
import { OAuth2Client } from "google-auth-library";
import { serialize } from "cookie";

type Data = {
  ok: boolean;
  payload: {};
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const acc = req.headers.authorization;

  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
  const client = new OAuth2Client(client_id);

  try {
    const ticket = await client.verifyIdToken({
      idToken: typeof acc == "string" ? acc : "",
      audience: client_id,
    });
    const payload = ticket.getPayload();
    const userid = payload ? payload["sub"] : "";
    const aud = payload ? payload["aud"] : "";

    const approved = client_id === aud;

    res.setHeader(
      "Set-Cookie",
      serialize("LID", String(acc), {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: true,
      })
    );

    return res.json({
      ok: approved,
      payload: payload ? payload : {},
    });
  } catch (e) {
    return res.json({
      ok: false,
      payload: {},
    });
  }
};
