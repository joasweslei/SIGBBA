import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import BeneficiaryEntity from './BeneficiaryEntity'
import TransferEntity from './transferEntity'

@Entity('entityEmployees')
class EntityEmployees {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  cpf: string

  @Column()
  rg: string

  @Column()
  phone: string

  @Column()
  functionEmployee: string

  @Column()
  typeEntity: string

  @ManyToOne(
    () => BeneficiaryEntity,
    beneficiaryEntity => beneficiaryEntity.employees
  )
  beneficiaryEntity: BeneficiaryEntity

  @ManyToOne(() => TransferEntity, transferEntity => transferEntity.employees)
  transferEntity: TransferEntity
}

export default EntityEmployees
