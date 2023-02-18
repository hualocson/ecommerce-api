import express from 'express'
import userRoute from './user.route.js'
import accountRoute from './account.route.js'

const router = express.Router()

router.use('/accounts', accountRoute)
router.use('/users', userRoute)

export default router
