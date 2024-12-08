import express from 'express'
const authRouter = express.Router()

import { createUser, loginAuth } from '../controllers/AuthControllers.js'

authRouter.post("/createUser", createUser)
authRouter.post("/authUser", loginAuth)

export default authRouter;