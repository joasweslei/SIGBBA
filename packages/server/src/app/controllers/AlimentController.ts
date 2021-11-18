import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Aliment from '../entities/Aliment'

class AlimentController {
  async index(req: Request, res: Response) {
    const repository = getRepository(Aliment)

    const aliments = await repository.find()

    console.log(aliments)

    return res.json(aliments)
  }

  async show(req: Request, res: Response) {
    const { alimentId } = req.params

    console.log(alimentId)

    const repository = getRepository(Aliment)

    const aliment = await repository.findOne({
      id: alimentId
    })

    if (!aliment) {
      return res.status(404).json({ message: 'Aliment not found.' })
    }

    return res.json(aliment)
  }

  async store(req: Request, res: Response) {
    const { name, description, perishable, storagePlace, typeFood } = req.body

    const repository = getRepository(Aliment)

    const aliment = await repository.save({
      name,
      description,
      perishable,
      storagePlace,
      typeFood
    })

    return res.json(aliment)
  }

  async update(req: Request, res: Response) {
    const { alimentId } = req.params
    const { name, description, perishable, storagePlace, typeFood } = req.body

    const repository = getRepository(Aliment)

    const aliment = await repository.save({
      id: alimentId,
      name,
      description,
      perishable,
      storagePlace,
      typeFood
    })

    return res.json(aliment)
  }

  async delete(req: Request, res: Response) {
    const { alimentId } = req.params

    const repository = getRepository(Aliment)

    const aliment = await repository.findOne({ where: { id: alimentId } })

    if (!aliment) {
      return res.status(404).json({ message: 'Aliment not found.' })
    }

    await repository.delete(aliment.id)

    return res.json(aliment)
  }
}

export default new AlimentController()
