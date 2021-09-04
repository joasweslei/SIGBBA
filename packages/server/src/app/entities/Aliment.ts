import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import AlimentDonation from './AlimentDonation'

@Entity('aliments')
class Aliment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  perishable: boolean

  @Column()
  storagePlace: string

  @Column()
  typeFood: string

  @OneToMany(() => AlimentDonation, doacao => doacao.alimento)
  public alimentDonation: AlimentDonation[]
}

export default Aliment
