import express from 'express'
import { allServices } from '../controllers/userController.js'

const router = express.Router()


router.get('/', allServices);



export default router