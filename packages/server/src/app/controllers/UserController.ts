import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import User from '../entities/User'

class UserController {
  store(req: Request, res: Response) {
    const repository = getRepository(User)

    const users = repository.find()

    return res.json(users)
  }
}

export default new UserController()
