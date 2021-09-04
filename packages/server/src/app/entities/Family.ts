import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import Dependent from './Dependent'

@Entity('family')
class Family {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToMany(() => Dependent, dependents => dependents.family)
  dependents: Dependent[]

  @Column()
  nameResp1: string

  @Column()
  cpfResp1: string

  @Column()
  nameMotherResp1: string

  @Column()
  dateBirthResp1: Date

  @Column()
  sexResp1: string

  @Column()
  fetchBasketResp1: boolean

  @Column()
  nis1: string

  @Column()
  nameResp2: string

  @Column()
  cpfResp2: string

  @Column()
  nameMotherResp2: string

  @Column()
  dateBirthResp2: Date

  @Column()
  sexResp2: string

  @Column()
  fetchBasketResp2: boolean

  @Column()
  nis2: string

  @Column()
  address: string

  @Column()
  numDep: string

  @Column()
  phone: string

  @Column()
  incomeCapita: string

  @Column()
  entityServide: string

  @Column()
  descAgeRange: string

  @Column()
  totalResiden: number

  @Column()
  socialService: string

  @Column()
  numAbsence: string

  @Column()
  basket: string

  @Column()
  dataInit: Date

  @Column()
  dateEnd: Date

  @Column()
  typeReceive: string
}

export default Family
