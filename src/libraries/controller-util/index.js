// @flow
import * as Error from '../error'

const throwIf = ErrorKind => errorMessage => predicate =>
  async function() {
    let predicateResult = predicate
    if (typeof predicate === 'function') predicateResult = predicate.apply(null, Object.values(arguments))
    if (predicateResult.then) predicateResult = await predicateResult
    console.log('throwIf', predicateResult)
    if (predicateResult) throw new ErrorKind(errorMessage)
  }
const throwIfNot = ErrorKind => errorMessage => predicate =>
  async function() {
    let predicateResult = predicate
    if (typeof predicate === 'function') predicateResult = predicate.apply(null, Object.values(arguments))
    if (predicateResult.then) predicateResult = await predicateResult
    console.log('throwIf', predicateResult)
    if (!predicateResult) throw new ErrorKind(errorMessage)
  }

const BadRequestIfNot = throwIfNot(Error.BadRequestError)
const NotFoundIfNot = throwIfNot(Error.NotFoundError)
const BadRequestIf = throwIf(Error.BadRequestError)
const NotFoundIf = throwIf(Error.NotFoundError)

/**
 * Usage
 * import ControllerUtil from '../../../libraries/controller-util'
 * const throwIfNotFoundVehicleOwner = ControllerUtil.NotFoundIfNot('Not found vehicleOwner')(getVehicleOwners)
 * 
 * await throwIfNotFoundVehicleOwner(vehicleOwnerId)
 * 
 */

export default {
  throwIf,
  BadRequestIfNot,
  NotFoundIfNot,
  BadRequestIf,
  NotFoundIf,
}
