import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import Family from './Family'

@Entity('dependentFamily')
class DependentFamily {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Family, family => family.dependents)
  family: Family

  @Column()
  nameDepen: string

  @Column()
  databirth: Date
}

export default DependentFamily
