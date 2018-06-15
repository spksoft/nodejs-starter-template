import BaseError from './base-error'
import errorCode from './error-code'
class UnauthorizedError extends BaseError {
  constructor (message, code = errorCode.UNAUTHORIZED.CODE, status = errorCode.UNAUTHORIZED.STATUS) {
    super(message)
    this.name = 'UnauthorizedError'
    this.status = status
    this.code = code
  }
}

export default UnauthorizedError
