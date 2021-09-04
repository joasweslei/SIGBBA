import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import EntityEmployees from './EntityEmployees'

@Entity('beneficiary_entities')
class BeneficiaryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  popularName: string

  @Column()
  cnpj: string

  @Column()
  fullAnddress: string

  @Column()
  responsibleCpf: string

  @Column()
  adviceData: string

  @Column()
  responsiblePhone: string

  @Column()
  corporateName: string

  @Column()
  WorkingDays: string

  @Column()
  responsibleEmail: string

  @Column()
  employeesNumber: number

  @OneToMany(() => EntityEmployees, employees => employees.beneficiaryEntity)
  employees: EntityEmployees[]
}

export default BeneficiaryEntity
