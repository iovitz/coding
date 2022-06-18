import type Koa from 'koa'
import BaseController from './base.controller';

export class UserController extends BaseController {
  constructor(app: Koa) {
    super(app, '/user')
    this.initRouterMap()
  }

  initRouterMap = () => {
    const { router } = this
    router.get('/name', this.getName)
  }

  getName = (ctx: Koa.DefaultContext) => {
    ctx.name = '123123'
  }

}