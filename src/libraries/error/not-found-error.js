import BaseError from './base-error'
import errorCode from './error-code'
class NotFoundError extends BaseError {
  constructor (message, code = errorCode.NOT_FOUND.CODE, status = errorCode.NOT_FOUND.STATUS) {
    super(message)
    this.name = 'NotFoundError'
    this.status = status
    this.code = code
  }
}

export default NotFoundError
