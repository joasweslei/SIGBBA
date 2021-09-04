import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import Donor from './Donor'
import User from './User'

@Entity('aliment_donations')
class Donation {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'datetime' })
  timeDon: Date

  @ManyToOne(() => User, user => user.donation)
  userReceived: User

  @ManyToOne(() => Donor, donor => donor.donation)
  idDonor: Donor
}

export default Donation
