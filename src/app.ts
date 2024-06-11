/* eslint-disable @typescript-eslint/ban-types */
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'

import express, { type Request, type Response } from 'express'

// import apiV1 from "./services/v1/routes";

const app: express.Application = express()

app.use(cors())
app.use(helmet())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req: Request, res: Response, next: Function) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  return next()
})

// app.use("/api/v1", apiV1);

export default app
