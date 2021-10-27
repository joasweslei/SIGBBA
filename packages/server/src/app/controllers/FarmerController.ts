import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Farmer from '../entities/Farmer'

class FarmerController {
  async store(req: Request, res: Response) {
    const {
      nameResp1,
      cpfResp1,
      nameMotherResp1,
      dateBirthResp1,
      sexResp1,
      nameResp2,
      cpfResp2,
      nameMotherResp2,
      dateBirthResp2,
      sexResp2,
      address,
      numDep,
      phone,
      nis,
      city,
      uf,
      validateOflicense,
      entityServide,
      dap,
      validateDap,
      cardProducer,
      passwordProducer,
      foodGet,
      order
    } = req.body

    const repository = getRepository(Farmer)

    const farmers = await repository.save({
      nameResp1,
      cpfResp1,
      nameMotherResp1,
      dateBirthResp1,
      sexResp1,
      nameResp2,
      cpfResp2,
      nameMotherResp2,
      dateBirthResp2,
      sexResp2,
      address,
      numDep,
      phone,
      nis,
      city,
      uf,
      validateOflicense,
      entityServide,
      dap,
      validateDap,
      cardProducer,
      passwordProducer,
      foodGet,
      order
    })

    return res.json(farmers)
  }

  async show(req: Request, res: Response) {
    const { farmerdi } = req.params

    const repository = getRepository(Farmer)

    const farmers = await repository.findOne({ id: farmerdi })

    if (!farmers) {
      return res.status(400).json({ message: 'User not found' })
    }

    return res.json(farmers)
  }
}

export default new FarmerController()
