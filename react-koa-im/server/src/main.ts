import './config'
import Koa from 'koa'
import initController from './controller'


const app = new Koa()

initController(app)