import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import EntityEmployees from './EntityEmployees'
import Family from './Family'

@Entity('transfer_entities')
class TransferEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  namePopular: string

  @Column()
  cnpj: string

  @Column()
  address: string

  @Column()
  cpfResp: string

  @Column()
  adviceData: string

  @Column()
  phoneResp: string

  @Column()
  nameCorporate: string

  @Column()
  daysOfOperation: string

  @Column()
  email: string

  @Column()
  numOperation: number

  @OneToMany(() => EntityEmployees, employees => employees.transferEntity)
  employees: EntityEmployees[]

  @OneToMany(() => Family, family => family.transferEntity)
  family: Family[]
}
export default TransferEntity
