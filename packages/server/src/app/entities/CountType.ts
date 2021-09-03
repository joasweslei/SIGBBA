import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('count_types')
class CountType {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  initial: string
}

export default CountType
