import { Router } from 'express'
import { updateSettingsHandler } from '../controllers/settings.js'

const router = Router()

router.patch('/settings-update/:userId', updateSettingsHandler)

export default router
