import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import Farmer from './Farmer'
import User from './User'

@Entity('order')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('datetime')
  dateCreated: Date

  @Column({ type: 'datetime', nullable: true })
  scheduledDate: Date

  @Column()
  orderStatus: string

  @Column()
  priceOrder: number

  @ManyToOne(() => Farmer, farmer => farmer.order)
  idFarmer: Farmer

  @ManyToOne(() => User, user => user.orderCreations)
  createdBy: User
}

export default Order
