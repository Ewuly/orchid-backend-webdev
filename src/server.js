import {connect} from './db/connect.js'
import app from './app.js'

// Run the server!
try {
  await connect()
  await app.listen({ port: 3001 })
} catch (err) {
  app.log.error(err)
  process.exit(1)
}

