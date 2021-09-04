import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany
} from 'typeorm'
import UnitType from './UnitType'

@Entity('aliments')
class Aliment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  perishable: boolean

  @Column()
  storagePlace: string

  @Column()
  typeFood: string

  @ManyToMany(() => UnitType)
  @JoinTable()
  unitType: UnitType[]
}

export default Aliment
