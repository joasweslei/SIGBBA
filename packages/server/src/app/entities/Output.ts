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

  @Column()
  date: Date

  @Column('enum')
  status: 'waiting' | 'confirmed' | 'cancelled' | 'invalidated'

  @OneToOne(() => BeneficiaryEntity)
  beneficiaryEntity: BeneficiaryEntity

  @OneToMany(() => AlimentOutput, alimentOutput => alimentOutput.outputs)
  alimentOutput: AlimentOutput
}

export default Output
