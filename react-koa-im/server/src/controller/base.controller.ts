import type Koa from 'koa'
import KoaRouter from 'koa-router'

export default abstract class BaseController {
  protected router: KoaRouter
  constructor(private app: Koa, prefix: string) {
    this.router = new KoaRouter({
      prefix
    })
    this.app.use(this.router.routes())
    this.app.use(this.router.allowedMethods())
  }
  abstract initRouterMap: () => void
}