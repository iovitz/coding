import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import koaStatic from 'koa-static'
import userRouter from './user'

const routes = [
  userRouter
]

const app = new Koa()

app.use(koaStatic('public'))
app.use(bodyParser())

routes.forEach(router => {
  app.use(router.routes())
  app.use(router.allowedMethods())
})

app.listen(process.env.port, () => {
  console.log(`Server running in http://localhost:25028`)
})
