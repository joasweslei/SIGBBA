import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

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
}

export default EntityEmployees
