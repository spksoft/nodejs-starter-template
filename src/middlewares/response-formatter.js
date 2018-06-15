import {
  ErrorCode
} from '../libraries/error'
const middleware = async (ctx, next) => {
  await next()
  if (ctx.status === 200 || ctx.status === 201) {
    ctx.body = {
      status: 200,
      code: ErrorCode.SUCCESS.CODE,
      data: ctx.body
    }
  }
}
const connectMiddleware = () => {
  return middleware
}

export default connectMiddleware
