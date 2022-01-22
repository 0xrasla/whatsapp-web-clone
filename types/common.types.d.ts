import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";

interface fetchInterface {
  url: string;
  options: {};
}

interface IuseFetchReturn {
  Results: {};
  Error: string;
  Loaded: boolean;
}

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};
