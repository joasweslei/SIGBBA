import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import Donation from './Donation'

@Entity('donors')
class Donor {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  donorName: string

  @Column()
  cpf: string

  @Column()
  cnpj: string

  @Column()
  city: string

  @Column()
  uf: string

  @Column()
  responsableName: string

  @Column()
  cpfResponse: string

  @Column()
  fullAddress: string

  @Column()
  contactResponsable: string

  @Column()
  framework: string

  @OneToMany(() => Donation, doacao => doacao.idDonor)
  donation: Donation[]
}

export default Donor
