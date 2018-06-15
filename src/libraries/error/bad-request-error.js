import BaseError from './base-error'
import errorCode from './error-code'
class BadRequestError extends BaseError {
  constructor (message, code = errorCode.BAD_REQUEST.CODE, status = errorCode.BAD_REQUEST.STATUS) {
    super(message)
    this.name = 'BadRequestError'
    this.status = status
    this.code = code
  }
}
export default BadRequestError
