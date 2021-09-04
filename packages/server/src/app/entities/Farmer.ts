import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import Order from './Order'

@Entity('farmers')
class Farmer {
  @PrimaryGeneratedColumn('uuid')
  id: string

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
  address: string

  @Column()
  numDep: string

  @Column()
  phone: string

  @Column()
  nis: number

  @Column()
  city: string

  @Column()
  uf: string

  @Column()
  validateOflicense: Date

  @Column()
  entityServide: string

  @Column()
  dap: string

  @Column()
  validateDap: number

  @Column()
  cardProducer: string

  @Column()
  passwordProducer: string

  @Column()
  foodGet: string

  @OneToMany(() => Order, order => order.idFarmer)
  order: Order[]
}

export default Farmer
