import type { NextApiRequest, NextApiResponse } from "next";
import { OAuth2Client } from "google-auth-library";

type Data = {
  ok: boolean;
  payload: {};
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { acc, client_id } = req.body;
  const client = new OAuth2Client(client_id);

  try {
    const ticket = await client.verifyIdToken({
      idToken: acc,
      audience: client_id,
    });
    const payload = ticket.getPayload();
    const userid = payload ? payload["sub"] : "";
    const aud = payload ? payload["aud"] : "";

    const approved = client_id === aud;

    return res.json({
      ok: approved,
      payload: userid,
    });
  } catch (e) {
    return res.json({
      ok: false,
      payload: {},
    });
  }
};
