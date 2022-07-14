import { WebSocketServer } from 'ws'

class SocketServer {
  private wss!: WebSocketServer
  private isMounted = false

  create() {
    if (this.isMounted) return this.wss
    this.isMounted = true
    this.wss = new WebSocketServer({
      port: 29117,
    })
    this.initSocket()
    return this.wss
  }

  private initSocket() {
    this.wss.on('connection', function (ws) {
      ws.on('message', function (message) {
        ws.send(`ECHO: ${message}`, (err) => {
          if (err) {
            console.log(`[SERVER] error: ${err}`)
          }
        })
      })
    })
  }

  emit(event: string, data: any) {
    this.wss.emit(event, {
      data,
    })
  }
}

const socketServer = new SocketServer()
export default socketServer
