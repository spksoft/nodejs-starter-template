import 'dotenv/config' // Only on top
import database from './database'
import example from './example'
import system from './system'
const combineConfig = {
  database,
  example,
  system
}
export default combineConfig
