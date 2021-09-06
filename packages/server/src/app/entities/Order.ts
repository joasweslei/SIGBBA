import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany
} from 'typeorm'
import AlimentOrder from './AlimentOrder'
import Farmer from './Farmer'
import User from './User'

@Entity('order')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('timestamp')
  dateCreated: Date

  @Column({ type: 'date', nullable: true })
  scheduledDate: Date

  @Column()
  orderStatus: string

  @Column()
  priceOrder: number

  @ManyToOne(() => Farmer, farmer => farmer.order)
  idFarmer: Farmer

  @ManyToOne(() => User, user => user.orderCreations)
  createdBy: User

  @OneToMany(() => AlimentOrder, order => order.order)
  aliment: AlimentOrder[]
}

export default Order
