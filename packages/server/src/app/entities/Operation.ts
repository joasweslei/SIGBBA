import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('operations')
class Operation {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  dayWeek: string

  @Column()
  horaryInit: number

  @Column()
  horaryClose: number

  @Column()
  enitity: string // o nome da entidade, associar com provavelmente uma FK
}

export default Operation
