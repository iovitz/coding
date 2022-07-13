import type { NextApiRequest } from 'next'
import type { Server as NetServer } from 'http'
import type { NextApiResponseServerIO } from '@/common/server.datatype'
import socketServer from '@/server/socketio'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function SocketConnect(req: NextApiRequest, res: NextApiResponseServerIO) {
  if (!res.socket.server.io) {
    const httpServer: NetServer = res.socket.server as any
    res.socket.server.io = socketServer.create()
  }
  res.end()
}
