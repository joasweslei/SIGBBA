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
import PriceCollection from './PriceCollection'
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

  @OneToMany(() => AlimentOutput, alimentOutput => alimentOutput.aliment)
  alimentOutputs: AlimentOutput[]

  @OneToMany(() => PriceCollection, price => price.alimentPrice)
  price: PriceCollection[]
}

export default Aliment
