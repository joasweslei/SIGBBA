import { Column, Entity, ManyToOne, OneToOne } from 'typeorm'
import AlimentOutput from './AlimentOutput'
import BeneficiaryEntity from './BeneficiaryEntity'
import Devolution from './Devolution'
@Entity('aliment_output_devolutions')
class AlimentOutputDevolution {
  @Column()
  quantity: number

  @ManyToOne(
    () => AlimentOutput,
    alimentOutput => alimentOutput.alimentOutputDevolution
  )
  alimentOutputs!: AlimentOutput[]

  @ManyToOne(() => Devolution, devolution => devolution.alimentOutputDevolution)
  devolutions!: Devolution[]

  @OneToOne(() => BeneficiaryEntity)
  beneficiaryEntity: BeneficiaryEntity
}

export default AlimentOutputDevolution
