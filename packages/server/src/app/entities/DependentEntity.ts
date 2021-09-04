import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('dependentEntity')
class DependentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  sexo: string

  @Column()
  dateBirth: Date

  @Column()
  codEntity: string
}

export default DependentEntity
