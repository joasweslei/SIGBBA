import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import AlimentOutputDevolution from './AlimentOutputDevolution'

@Entity('devolutions')
class Devolution {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  reason: string

  @Column()
  date: Date

  @OneToMany(
    () => AlimentOutputDevolution,
    alimentOutputDevolution => alimentOutputDevolution.devolution
  )
  alimentOutputDevolutions: AlimentOutputDevolution[]
}

export default Devolution
