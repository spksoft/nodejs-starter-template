import config from '../config'
import {
  ErrorCode,
  NotFoundError,
  InternalServerError
} from '../libraries/error'
const middleware = async (ctx, next) => {
  try {
    await next()
    if (ctx.status !== 200 && ctx.status !== 201) {
      switch (ctx.status) {
        case 404:
          throw new NotFoundError('URL not found or method not allow', ErrorCode.URI_NOT_FOUND.CODE)
          break
        default:
          throw new InternalServerError('Somethin went wrong')
      }
    }
  } catch (err) {
    ctx.app.emit('error', err, ctx)
  }
}

const handler = (err, ctx) => {
  const { graylogErrorStack, responseErrorStack } = config.system
  if (graylogErrorStack === true) {
    ctx.stack = err.stack || null
  }
  if (err.code) {
    ctx.status = (Number.isInteger(err.status)) ? err.status : ErrorCode.INTERNAL_SERVER_ERROR.STATUS
    ctx.body = {
      status: ctx.status,
      name: err.name || null,
      code: err.code || null,
      message: err.message || null,
      stack: (responseErrorStack !== false) ? err.stack || null : null
    }
  } else {
    ctx.status = ErrorCode.INTERNAL_SERVER_ERROR.STATUS
    ctx.body = {
      status: ErrorCode.INTERNAL_SERVER_ERROR.STATUS,
      name: err.name || null,
      code: ErrorCode.INTERNAL_SERVER_ERROR.CODE,
      message: err.message || null,
      stack: (responseErrorStack !== false) ? err.stack || null : null
    }
  }
}

const errorMiddleware = () => {
  return middleware
}

const errorHandler = () => {
  return handler
}

export {
  errorMiddleware,
  errorHandler,
}
