import BaseError from './base-error'
import errorCode from './error-code'
class ValidationError extends BaseError {
  constructor (message, errors, data, code = errorCode.VALIDATION.CODE, status = errorCode.VALIDATION.STATUS) {
    super(message)
    this.name = 'ValidationError'
    this.status = 400
    this.code = code
    this.data = data
    this.errors = errors
  }
}
export default ValidationError
