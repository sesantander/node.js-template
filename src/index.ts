import http from 'http'
import app from './app'
import { AppDataSource } from './config/db_config'
import { environmentVariables } from './config/config'

const port = environmentVariables.port

const server = http.createServer(app)

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
    server.listen(port, () => {
      console.log(`Server Running on Port ${port}`)
    })
  })
  .catch((err: Error) => {
    console.log('LOG ~ err:', err)
    console.error('Error during Data Source initialization:', err)
  })
