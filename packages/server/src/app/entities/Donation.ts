import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany
} from 'typeorm'
import AlimentDonation from './AlimentDonation'
import Donor from './Donor'
import User from './User'

@Entity('donations')
class Donation {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'datetime' })
  timeDon: Date

  @ManyToOne(() => User, user => user.donation)
  userReceived: User

  @ManyToOne(() => Donor, donor => donor.donation)
  idDonor: Donor

  @OneToMany(() => AlimentDonation, alimento => alimento.donation)
  public alimentDonation: AlimentDonation[]
}

export default Donation
