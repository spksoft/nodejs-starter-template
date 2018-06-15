import UserModel from './user.model'
import MongooseBaseRepository from '@spksoft/mongoose-repository'

class UserRepository extends MongooseBaseRepository {

}
const instance = new UserRepository(UserModel)
export default instance
