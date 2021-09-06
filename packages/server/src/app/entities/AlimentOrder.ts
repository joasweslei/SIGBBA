import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('aliment_order')
class AlimentOrder {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  quantityItem: number

  @Column()
  quantityKg: number

  @Column()
  unityPrice: number

  @Column()
  totalPrice: number
}
export default AlimentOrder
