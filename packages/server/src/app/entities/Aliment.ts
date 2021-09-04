import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
  ManyToMany,
  ManyToOne
} from 'typeorm'
import AlimentDonation from './AlimentDonation'
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

  @OneToMany(() => AlimentDonation, doacao => doacao.alimento)
  public alimentDonation: AlimentDonation[]

  @ManyToMany(() => UnitType)
  @JoinTable()
  unitType: UnitType[]

  @ManyToOne(() => AlimentOutput, alimentOutput => alimentOutput.aliments)
  alimentOutput: AlimentOutput
}

export default Aliment
