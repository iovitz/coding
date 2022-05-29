import Koa from 'koa'

export default class WebServer {
  private koa = new Koa()

  private moduels = []

  constructor (private port: number) {
    this.initModule()
  }

  initModule () {
    this.moduels.forEach(item => {
      console.log(item)
    })
  }
}
