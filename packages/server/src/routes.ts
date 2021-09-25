import { Router } from 'express'
import AlimentBasketController from './app/controllers/AlimentBasketController'
import FarmerController from './app/controllers/FarmerController'

import UserController from './app/controllers/UserController'

const router = Router()

router.get('/users', UserController.index)
router.get('/users/:userid', UserController.show)
router.post('/users', UserController.store)
router.put('/users/:userId', UserController.update)
router.delete('/users/:userId', UserController.delete)
router.get('/teste', UserController.teste)

router.post('/farmer', FarmerController.store)
router.get('/farmer/:farmerid', FarmerController.show)

router.get('/aliment-basket', AlimentBasketController.index)
router.get('/aliment-basket/:alimentBasketId', AlimentBasketController.show)
router.post('/aliment-basket', AlimentBasketController.store)
router.put('/aliment-basket/:alimentBasketId', AlimentBasketController.update)
router.delete(
  '/aliment-basket/:alimentBasketId',
  AlimentBasketController.delete
)

export default router
