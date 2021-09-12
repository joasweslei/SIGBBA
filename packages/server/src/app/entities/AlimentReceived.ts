import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn
} from 'typeorm'
import AlimentOrder from './AlimentOrder'
import User from './User'

@Entity('aliment_received')
class AlimentReceived {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  quantityUn: number

  @Column({ type: 'timestamp' })
  dateReceived: Date

  @Column({ nullable: true })
  quantityKg: number

  @OneToOne(() => AlimentOrder)
  @JoinColumn()
  aliment: AlimentOrder

  @OneToOne(() => User)
  @JoinColumn()
  userReceived: User
}
export default AlimentReceived
