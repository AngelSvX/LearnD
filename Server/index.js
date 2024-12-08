import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

import authRouter from './src/api/AuthRouters.js'

app.use("/api/auth", authRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server init on por: ${process.env.PORT}`)
})