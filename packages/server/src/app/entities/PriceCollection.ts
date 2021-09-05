import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import Aliment from './Aliment'

@Entity('price_collections')
class PriceCollection {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  codAliment: string

  @Column()
  price: number

  @Column({ type: 'date' })
  dataCollection: Date

  @ManyToOne(() => Aliment, aliment => aliment.price)
  alimentPrice: Aliment
}

export default PriceCollection
