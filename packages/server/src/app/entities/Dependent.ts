import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import Family from './family'

@Entity('dependent')
class Dependent {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Family, family => family.dependents)
  family: Family

  @Column()
  nameDepen: string

  @Column()
  databirth: Date
}

export default Dependent
