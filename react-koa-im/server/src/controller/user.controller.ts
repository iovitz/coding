import type Koa from 'koa'
import BaseController from './base.controller';

export class UserController extends BaseController {
  constructor(app: Koa) {
    super(app, '/user')
    this.initRouterMap()
  }

  initRouterMap = () => {
    const { router } = this
    router.post('/login', this.postLogin)
    router.post('/register', this.postRegister)
  }

  postLogin = (ctx: any) => {
    console.log(ctx)
  }

  postRegister = (ctx: Koa.DefaultContext) => {
    ctx.body = 'register'
  }

}