import type { NextApiRequest, NextApiResponse } from "next";
import { OAuth2Client } from "google-auth-library";

type Data = {
  ok: boolean;
  payload: {} | undefined;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const authToken = req.cookies.LID || "";

  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
  const client = new OAuth2Client(client_id);

  try {
    const ticket = await client.verifyIdToken({
      idToken: authToken,
      audience: client_id,
    });
    const payload = ticket.getPayload();
    const userid = payload ? payload["sub"] : "";
    const aud = payload ? payload["aud"] : "";

    const approved = client_id === aud;

    return res.json({
      ok: approved,
      payload: payload,
    });
  } catch (e) {
    return res.json({
      ok: false,
      payload: {},
    });
  }
};
