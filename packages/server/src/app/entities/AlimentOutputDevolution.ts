import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import AlimentOutput from './AlimentOutput'
import Devolution from './Devolution'
@Entity('aliment_output_devolutions')
class AlimentOutputDevolution {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  quantity: number

  @ManyToOne(
    () => AlimentOutput,
    alimentOutput => alimentOutput.alimentOutputDevolutions
  )
  alimentOutput: AlimentOutput

  @ManyToOne(
    () => Devolution,
    devolution => devolution.alimentOutputDevolutions
  )
  devolution: Devolution
}

export default AlimentOutputDevolution
