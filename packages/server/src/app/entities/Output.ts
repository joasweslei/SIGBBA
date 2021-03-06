import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne
} from 'typeorm'
import AlimentOutput from './AlimentOutput'
import BeneficiaryEntity from './BeneficiaryEntity'

@Entity('outputs')
class Output {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'date' })
  date: Date

  @Column({
    type: 'enum',
    enum: ['waiting', 'confirmed', 'cancelled', 'invalidated'],
    default: 'waiting'
  })
  status: 'waiting' | 'confirmed' | 'cancelled' | 'invalidated'

  @OneToOne(() => BeneficiaryEntity)
  beneficiaryEntity: BeneficiaryEntity

  @OneToMany(() => AlimentOutput, alimentOutput => alimentOutput.output)
  alimentOutputs: AlimentOutput[]
}

export default Output
