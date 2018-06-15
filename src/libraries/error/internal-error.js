import BaseError from './base-error'
import errorCode from './error-code'
class InternalServerError extends BaseError {
  constructor (message, code = errorCode.INTERNAL_SERVER_ERROR.CODE, status = errorCode.INTERNAL_SERVER_ERROR.STATUS) {
    super(message)
    this.name = 'InternalServerError'
    this.status = status
    this.code = code
  }
}
export default InternalServerError
