import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('families')
class Family {
  @PrimaryGeneratedColumn('uuid')
  id: string

  // @OneToMany(() => Dependent, dependents => dependents.family)
  // dependents: Dependent[]

  @Column()
  nameResp1: string

  @Column()
  cpfResp1: string

  @Column()
  nameMotherResp1: string

  @Column({ type: 'date' })
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

  @Column({ type: 'date' })
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

  @Column({ type: 'date' })
  dataInit: Date

  @Column({ type: 'date' })
  dateEnd: Date

  @Column()
  typeReceive: string
}

export default Family
