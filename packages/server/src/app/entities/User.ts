import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import AlimentReceived from './AlimentReceived'
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
  userpassword: string

  @OneToMany(() => Donation, doacao => doacao.userReceived)
  donation: Donation[]

  @OneToMany(() => Order, order => order.createdBy)
  orderCreations: Order[]

  @OneToMany(() => AlimentReceived, received => received.userReceived)
  alimenteReceived: AlimentReceived[]
}

export default User
