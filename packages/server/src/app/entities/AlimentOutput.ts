import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm'
import Aliment from './Aliment'
import AlimentOutputDevolution from './AlimentOutputDevolution'
import BeneficiaryEntity from './BeneficiaryEntity'
import CountType from './CountType'
import Output from './Output'

@Entity('aliment_outputs')
class AlimentOutput {
  @Column()
  quantity: number

  @OneToMany(() => Aliment, aliment => aliment.alimentOutput)
  aliments: Aliment[]

  @OneToMany(() => Output, output => output.alimentOutput)
  outputs: Output[]

  @OneToOne(() => CountType)
  @JoinColumn()
  countType: CountType

  @OneToOne(() => BeneficiaryEntity)
  beneficiaryEntity: BeneficiaryEntity

  @OneToMany(
    () => AlimentOutputDevolution,
    alimentOutputDev => alimentOutputDev.alimentOutputs
  )
  alimentOutputDevolutions: AlimentOutputDevolution[]
}

export default AlimentOutput
