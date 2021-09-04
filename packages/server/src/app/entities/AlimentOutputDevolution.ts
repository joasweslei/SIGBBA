import { Column, Entity, OneToMany, OneToOne } from 'typeorm'
import AlimentOutput from './AlimentOutput'
import BeneficiaryEntity from './BeneficiaryEntity'
import Devolution from './Devolution'
@Entity('aliment_output_devolutions')
class AlimentOutputDevolution {
  @Column()
  quantity: number

  @OneToMany(
    () => AlimentOutput,
    alimentOutput => alimentOutput.alimentOutputDevolutions
  )
  alimentOutputs: AlimentOutput[]

  @OneToMany(() => Devolution, devolution => devolution.alimentOutputDevolution)
  devolutions: Devolution[]

  @OneToOne(() => BeneficiaryEntity)
  beneficiaryEntity: BeneficiaryEntity
}

export default AlimentOutputDevolution
