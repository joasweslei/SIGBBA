import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import User from '../entities/User'

class UserController {
  async index(req: Request, res: Response) {
    const repository = getRepository(User)

    const users = await repository.find()

    return res.json(users)
  }

  async teste(req: Request, res: Response) {
    const userdate = await getRepository(User).find()

    return res.json(userdate)
  }

  async show(req: Request, res: Response) {
    const { userid } = req.params

    const repository = getRepository(User)

    const users = await repository.findOne({ id: userid })

    if (!users) {
      return res.status(404).json({ message: 'User not found' })
    }

    return res.json(users)
  }

  async store(req: Request, res: Response) {
    const { username, email, userpassword } = req.body

    const repository = getRepository(User)

    const users = await repository.save({
      username,
      email,
      userpassword
    })

    return res.json(users)
  }

  async update(req: Request, res: Response) {
    const { userId } = req.params
    const { username, email, userpassword } = req.body

    const repository = getRepository(User)

    const user = await repository.save({
      id: userId,
      username,
      email,
      userpassword
    })

    return res.json(user)
  }

  async delete(req: Request, res: Response) {
    const { userId } = req.params

    const repository = getRepository(User)

    const user = await repository.findOne({ id: userId })

    if (!user) {
      return res.status(404).json({ message: 'User not found.' })
    }

    await repository.delete(user.id)

    return res.json(user)
  }

  async auth(req: Request, res: Response) {
    return res.json({ a: '' })
  }
}

export default new UserController()
