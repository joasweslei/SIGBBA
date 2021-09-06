import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
  ManyToMany
} from 'typeorm'
import AlimentDonation from './AlimentDonation'
import AlimentOrder from './AlimentOrder'
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
  unitType: UnitType[] // todo: pode existir mais de uma entidade responsável por armazenar unidade de medida

  @OneToMany(() => AlimentOutput, alimentOutput => alimentOutput.aliment)
  alimentOutputs: AlimentOutput[]

  @OneToMany(() => PriceCollection, price => price.alimentPrice)
  price: PriceCollection[]

  @OneToMany(() => AlimentOrder, aliment => aliment.aliment)
  alimentOrder: AlimentOrder[]
}

export default Aliment
