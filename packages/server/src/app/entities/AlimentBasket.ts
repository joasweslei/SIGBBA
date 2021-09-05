import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from 'typeorm'
import Aliment from './Aliment'
import Family from './Family'

@Entity('aliment_baskets')
class AlimentBasket {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @ManyToMany(() => Aliment)
  @JoinTable()
  aliments: Aliment[]

  @ManyToMany(() => Family)
  @JoinTable()
  families: Family[]
}

export default AlimentBasket
