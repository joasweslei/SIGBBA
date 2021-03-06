import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import Family from './Family'
// import Family from './Family'

@Entity('dependent_families')
class DependentFamily {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Family, family => family.dependents)
  family: Family

  @Column()
  nameDepen: string

  @Column({ type: 'date' })
  databirth: Date
}

export default DependentFamily
