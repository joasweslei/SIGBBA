import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

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
}

export default Order
