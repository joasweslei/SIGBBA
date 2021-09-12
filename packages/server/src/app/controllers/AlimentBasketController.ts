import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import AlimentBasket from '../entities/AlimentBasket'

class AlimentBasketController {
  async index(req: Request, res: Response) {
    const repository = getRepository(AlimentBasket)

    const alimentBaskets = await repository.find()

    return res.json(alimentBaskets)
  }

  async show(req: Request, res: Response) {
    const { alimentBasketId } = req.params

    const repository = getRepository(AlimentBasket)

    const alimentBasket = await repository.findOne(
      {
        id: alimentBasketId
      },
      { relations: ['aliments'] }
    )

    return res.json(alimentBasket)
  }

  async store(req: Request, res: Response) {
    const { name, description, aliments } = req.body

    const repository = getRepository(AlimentBasket)

    const alimentBasket = await repository.save({ name, description, aliments })

    return res.json(alimentBasket)
  }

  async update(req: Request, res: Response) {
    const { alimentBasketId } = req.params
    const { name, description, aliments } = req.body

    const repository = getRepository(AlimentBasket)

    const alimentBasket = await repository.save({
      id: alimentBasketId,
      name,
      description,
      aliments
    })

    return res.json(alimentBasket)
  }

  async delete(req: Request, res: Response) {
    const { alimentBasketId } = req.params

    const repository = getRepository(AlimentBasket)

    const alimentBasket = await repository.findOne({ id: alimentBasketId })

    if (!alimentBasket) {
      return res.status(404).json({ message: 'Aliment basket not found.' })
    }

    await repository.delete(alimentBasket.id)

    return res.json(alimentBasket)
  }
}

export default new AlimentBasketController()
