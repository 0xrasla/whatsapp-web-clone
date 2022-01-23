import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "../../types/common.types";
import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";

export const config = {
  api: {
    bodyParser: false,
  },
};

<<<<<<< HEAD
const SocketIO = async (
  req: NextApiRequest,
  res: NextApiResponseServerIO
): Promise<any> => {
=======
export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
>>>>>>> main
  if (!res.socket.server.io) {
    const httpServer: NetServer = res.socket.server as any;
    const io = new ServerIO(httpServer, {
      path: "/api/socketio",
    });
    res.socket.server.io = io;
  }
  res.end();
};
<<<<<<< HEAD

export default SocketIO;
=======
>>>>>>> main
