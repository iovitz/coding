import type Koa from 'koa'
import koaStatic from 'koa-static'
import bodyParser from 'koa-bodyparser'
import { UserController } from './user.controller'
import Router from 'koa-router'
import BaseController from './base.controller'

const routes: (new (app: Koa) => BaseController)[] = [
  UserController
]

const controllerMap = new Map<string, BaseController>()

export default function initController(app: Koa) {

  app.use(koaStatic('public'))
  app.use(bodyParser())

  routes.forEach(Route => {
    controllerMap.set(Route.name, new Route(app))
  })
  
  app.listen(process.env.port, () => {
    console.log(`Server running in http://localhost:25028`)
  })
}