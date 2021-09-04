import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import Donation from './Donation'
import Order from './Order'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  username: string

  @Column()
  email: string

  @Column()
  password: string

  @OneToMany(() => Donation, doacao => doacao.userReceived)
  donation: Donation[]

  @OneToMany(() => Order, order => order.createdBy)
  orderCreations: Order[]
}

export default User
