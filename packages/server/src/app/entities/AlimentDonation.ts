import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import Aliment from './Aliment'
import Donation from './Donation'

@Entity('aliment_donations')
class AlimentDonation {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @ManyToOne(() => Donation, doacao => doacao.alimentDonation)
  public donation: Donation

  @ManyToOne(() => Aliment, alimento => alimento.alimentDonation)
  public alimento: Aliment

  @Column({ nullable: true })
  public quantityUn: number

  @Column({ nullable: true })
  public quantityKg: number
}

export default AlimentDonation
