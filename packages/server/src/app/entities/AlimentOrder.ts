import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import Aliment from './Aliment'
import Order from './Order'

@Entity('aliment_order')
class AlimentOrder {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  quantityUn: number

  @Column({ nullable: true })
  quantityKg: number

  @Column()
  unityPrice: number

  @Column()
  totalPrice: number

  @ManyToOne(() => Aliment, aliment => aliment.alimentOrder)
  aliment: Aliment

  @ManyToOne(() => Order, order => order.aliment)
  order: Order
}
export default AlimentOrder
