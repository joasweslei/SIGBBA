import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
  ManyToMany
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
  unitType: UnitType[] // todo: pode existir mais de uma entidade responsável por armazenar unidade de medida

  @OneToMany(() => AlimentOutput, alimentOutput => alimentOutput.aliment)
  alimentOutputs: AlimentOutput[]
}

export default Aliment
