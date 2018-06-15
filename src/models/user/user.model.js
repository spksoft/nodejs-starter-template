import Mongoose from 'mongoose'
import MongoosePaginate from 'mongoose-paginate'
import timestamps from 'mongoose-timestamp'

const schemaDefinition = {
  username: { type: String, required: true, unique: true },
  password: { type: String },
}

const Schema = new Mongoose.Schema(schemaDefinition)
Schema.plugin(timestamps)
Schema.plugin(MongoosePaginate)

const Model = Mongoose.model('User', Schema)

export default Model
