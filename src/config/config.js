import dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

export const environmentVariables = {
  port: parseInt(process.env.PORT ?? '8010', 10),
  db: {
    user: process.env.DB_USERNAME_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST_DEV,
    port: +process.env.DB_PORT_DEV
  }
}
