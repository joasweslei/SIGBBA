import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import AlimentDonation from './AlimentDonation'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  username: string

  @Column()
  email: string

  @Column()
  password: string

  @OneToMany(() => AlimentDonation, doacao => doacao.userReceived)
  alimentDonations: AlimentDonation[]
}

export default User
