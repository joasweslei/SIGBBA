import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Order from '../entities/Order'

class OrderController {
  async index(req: Request, res: Response) {
    const repository = getRepository(Order)

    const orders = await repository.find()

    return res.json(orders)
  }

  async show(req: Request, res: Response) {
    const { orderId } = req.params

    const repository = getRepository(Order)

    const order = await repository.findOne(
      {
        id: orderId
      },
      { relations: ['idFarmer, aliment, createdBy'] }
    )

    if (!order) {
      return res.status(404).json({ message: 'AlimentBasket not found.' })
    }

    return res.json(order)
  }
}

export default new OrderController()
