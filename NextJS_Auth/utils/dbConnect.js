import mongoose from 'mongoose'
import Config from '../config'
const connection = {} /* creating connection object*/

async function dbConnect() {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    return
  }

  /* connecting to our database */
  const db = await mongoose.connect(Config.mongoose.url,Config.mongoose.options)

  connection.isConnected = db.connections[0].readyState
}

export default dbConnect