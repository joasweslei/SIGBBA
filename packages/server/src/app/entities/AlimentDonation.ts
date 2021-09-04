import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import Donor from './Donor'
import User from './User'

@Entity('aliment_donations')
class AlimentDonation {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'datetime' })
  timeDon: Date

  @ManyToOne(() => User, user => user.alimentDonations)
  userReceived: User

  @ManyToOne(() => Donor, donor => donor.alimentDonations)
  idDonor: Donor
}

export default AlimentDonation
