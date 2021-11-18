import { Router } from 'express'
import AlimentBasketController from './app/controllers/AlimentBasketController'
import AlimentController from './app/controllers/AlimentController'
import { DapController } from './app/controllers/Dap/DapController'
import FarmerController from './app/controllers/FarmerController'

import UserController from './app/controllers/UserController'

const router = Router()

const dapController = new DapController()

router.get('/users', UserController.index)
router.get('/users/:userid', UserController.show)
router.post('/users/auth/username', UserController.auth)
router.post('/users', UserController.store)
router.put('/users/:userId', UserController.update)
router.delete('/users/:userId', UserController.delete)
router.get('/teste', UserController.teste)
router.get('/getDap/:cpf', dapController.getDap)

router.post('/farmer', FarmerController.store)
router.get('/farmer/:farmerid', FarmerController.show)

router.get('/aliment', AlimentController.index)
router.get('/aliment/:alimentId', AlimentController.show)
router.post('/aliment', AlimentController.store)
router.put('/aliment/:alimentId', AlimentController.update)
router.delete('/aliment/:alimentId', AlimentController.delete)

router.get('/aliment-basket', AlimentBasketController.index)
router.get('/aliment-basket/:alimentBasketId', AlimentBasketController.show)
router.post('/aliment-basket', AlimentBasketController.store)
router.put('/aliment-basket/:alimentBasketId', AlimentBasketController.update)
router.delete(
  '/aliment-basket/:alimentBasketId',
  AlimentBasketController.delete
)

export default router
