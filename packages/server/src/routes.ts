import { Router } from 'express'
import AlimentBasketController from './app/controllers/AlimentBasketController'

import UserController from './app/controllers/UserController'

const router = Router()

router.post('/users', UserController.store)
router.get('/users/:userid', UserController.show)

router.get('/aliment-basket', AlimentBasketController.index)
router.get('/aliment-basket/:alimentBasketId', AlimentBasketController.show)
router.post('/aliment-basket', AlimentBasketController.store)
router.put('/aliment-basket/:alimentBasketId', AlimentBasketController.update)
router.delete(
  '/aliment-basket/:alimentBasketId',
  AlimentBasketController.delete
)

export default router
