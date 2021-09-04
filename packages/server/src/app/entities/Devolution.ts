import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import AlimentOutputDevolution from './AlimentOutputDevolution'

@Entity('devolutions')
class Devolution {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  reason: string

  @Column()
  date: Date

  @ManyToOne(
    () => AlimentOutputDevolution,
    alimentOutputDevolution => alimentOutputDevolution.devolutions
  )
  alimentOutputDevolution: AlimentOutputDevolution
}

export default Devolution
