import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import Aliment from './Aliment'
import AlimentOutputDevolution from './AlimentOutputDevolution'
import CountType from './CountType'
import Output from './Output'

@Entity('aliment_outputs')
class AlimentOutput {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  quantity: number

  @ManyToOne(() => Aliment, aliment => aliment.alimentOutputs)
  aliment: Aliment

  @ManyToOne(() => Output, output => output.alimentOutputs)
  output: Output

  @OneToOne(() => CountType)
  @JoinColumn()
  countType: CountType

  @OneToMany(
    () => AlimentOutputDevolution,
    alimentOutputDev => alimentOutputDev.alimentOutput
  )
  alimentOutputDevolutions: AlimentOutputDevolution[]
}

export default AlimentOutput
