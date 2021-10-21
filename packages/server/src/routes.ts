import { Router } from 'express'
import AlimentBasketController from './app/controllers/AlimentBasketController'
import {DapController} from './app/controllers/DapController'
import FarmerController from './app/controllers/FarmerController'
import OrderController from './app/controllers/OrderController'
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

router.get('/aliment-basket', AlimentBasketController.index)
router.get('/aliment-basket/:alimentBasketId', AlimentBasketController.show)
router.post('/aliment-basket', AlimentBasketController.store)
router.put('/aliment-basket/:alimentBasketId', AlimentBasketController.update)
router.delete(
  '/aliment-basket/:alimentBasketId',
  AlimentBasketController.delete
)

// order routers below
router.get('/pedidosi', OrderController.index)
// order routers above
export default router
