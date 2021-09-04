import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
  ManyToMany
} from 'typeorm'
import AlimentDonation from './AlimentDonation'
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

  @OneToMany(() => AlimentOutput, alimentOutput => alimentOutput.aliments)
  alimentOutput: AlimentOutput
}

export default Aliment
