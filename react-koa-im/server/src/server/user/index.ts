import KoaRouter from 'koa-router'

const userRouter = new KoaRouter({
  prefix: '/users'
})

userRouter.get('/name', ({response} , next) => {
  response.body = 'iovitz'
})

userRouter.put('/login', (ctx, next) => {
  ctx.response.body = 'put request'
})

export default userRouter
