import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
  OneToMany
} from 'typeorm'
import AlimentOutput from './AlimentOutput'
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

  @OneToMany(() => AlimentOutput, alimentOutput => alimentOutput.aliments)
  alimentOutput: AlimentOutput
}

export default Aliment
