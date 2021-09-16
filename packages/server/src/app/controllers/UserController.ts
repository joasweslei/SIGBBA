import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import User from '../entities/User'

class UserController {
  async store(req: Request, res: Response) {
    const { username, email, userpassword } = req.body
    console.log(username)

    const repository = getRepository(User)

    const users = await repository.save({ username, email, userpassword })

    return res.json(users)
  }

  async teste(req: Request, res: Response) {
    const userdate = await getRepository(User).find()

    return res.json(userdate)
  }

  async show(req: Request, res: Response) {
    const { userid } = req.params

    const repository = getRepository(User)

    console.log('aaa: %c', userid)

    const users = await repository.findOne({ id: userid })

    if (!users) {
      return res.status(404).json({ message: 'User not found' })
    }

    return res.json(users)
  }
}

export default new UserController()
