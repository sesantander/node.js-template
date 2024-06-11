import 'reflect-metadata'
import * as path from 'path'
import { DataSource } from 'typeorm'
import { User } from '../models/user.model'

import { environmentVariables } from './config'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: environmentVariables.db.host,
  port: environmentVariables.db.port,
  username: environmentVariables.db.user,
  password: environmentVariables.db.password,
  database: environmentVariables.db.database,
  synchronize: false,
  logging: false,
  entities: [User],
  migrations: [path.join(__dirname, '../../db/migration/*.ts')],
  subscribers: []
})
