import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

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
}

export default PriceCollection
